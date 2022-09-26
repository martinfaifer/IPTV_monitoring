<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Models\Stream;
use React\EventLoop\Loop;
use React\EventLoop\Factory;
use Illuminate\Support\Facades\Cache;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Actions\Cache\DeleteStreamPidProcessAction;
use App\Actions\Streams\Analyze\TsDuckAnalyzeAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Cache\StoreStreamDiagnosticTimeStampAction;
use App\Actions\Streams\Analyze\CheckIfStreamCanBeKillAction;
use App\Services\StreamDiagnostic\FFMpeg\StreamDiagnosticFfProbeService;

class StreamDiagnosticTsDuckService
{
    public function __construct(int $streamId)
    {
        $stream = Stream::find($streamId);
        (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_STARTING);
        $this->monitoring($stream);
    }

    public function monitoring(object $stream)
    {
        $loop = Loop::get();
        $loop->addPeriodicTimer(4.0, function () use ($stream, $loop) {
            // kontrola zda stream má být dohledován
            if ($this->check_if_stream_can_be_kill($stream) == true) {
                $this->change_stream_status_and_release_them($stream);
                $loop->stop();
                exit();
            }

            // provedení analýzi streamu
            $analyzeResultInJson = (new TsDuckAnalyzeAction())->execute($stream->stream_url);
            $analyzedResultInArray = json_decode($analyzeResultInJson, true);

            // kontrola výstupu
            if (is_null($analyzedResultInArray)) {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_CAN_NOT_START);
            } else {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_MONITORING);
                (new StreamDiagnosticTsDuckAnalyzedService(collect($analyzedResultInArray), $stream));
                // (new StreamDiagnosticFfProbeService($stream));
                (new StoreStreamDiagnosticTimeStampAction())->execute($stream);
            }
        });

        $loop->run();
    }

    protected function check_if_stream_can_be_kill(object $stream): bool
    {
        if (! Stream::find($stream->id)) {
            return true;
        }

        return (new CheckIfStreamCanBeKillAction($stream->stream_url))->execution() == true
            ? true
            : false;
    }

    protected function change_stream_status_and_release_them(object $stream)
    {
        (new UnlockStreamUrlAction($stream))->handle();
        (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_STOPPED);
        // remove stored pid
        (new DeleteStreamPidProcessAction())->execute($stream);
    }
}
