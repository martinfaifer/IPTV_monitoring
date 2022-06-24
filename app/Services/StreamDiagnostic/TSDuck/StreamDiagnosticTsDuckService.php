<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Actions\Streams\Analyze\TsDuckAnalyzeAction;
use App\Actions\Streams\Analyze\TsDuckOutputToCollectionAction;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Models\Stream;
use App\Services\StreamDiagnostic\FFMpeg\StreamDiagnosticFfProbeService;
use Illuminate\Support\Facades\Cache;
use React\EventLoop\Loop;

class StreamDiagnosticTsDuckService
{
    public function __construct(int $streamId)
    {
        // sleep is because is better wait for pid a store in cache
        sleep(2);
        if (Cache::has('streamIsMonitoring_'.$streamId)) {
            $stream = Stream::find($streamId);
            (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_STARTING);
            $this->monitoring($stream);
        }
    }

    public function monitoring(object $stream)
    {
        $loop = new Loop();
        $loop->addPeriodicTimer(1.0, function () use ($stream, $loop) {
            $tsduckOutput = (new TsDuckAnalyzeAction())->execute($stream->stream_url);

            if (is_null($tsduckOutput)) {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_CAN_NOT_START);
            } elseif (! str_contains($tsduckOutput, 'pid:')) {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_CAN_NOT_START);
            } else {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_MONITORING);
                $tsDuckCollection = (new TsDuckOutputToCollectionAction())->execute($tsduckOutput);
                (new StreamDiagnosticTsDuckAnalyzedService($tsDuckCollection, $stream));
            }

            // spustení diagnostiky pro ffprobe
            new StreamDiagnosticFfProbeService($stream);

            if (! Cache::has('streamIsMonitoring_'.$stream->id)) {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_ISSUE);
                $loop->stop();
            }
        });

        $loop->run();
    }
}
