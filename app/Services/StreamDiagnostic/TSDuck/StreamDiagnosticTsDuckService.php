<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Models\Stream;
use React\EventLoop\Loop;
use Illuminate\Support\Facades\Cache;
use App\Actions\Cache\Locks\LockStreamAction;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Actions\Cache\DeleteStreamPidProcessAction;
use App\Actions\Streams\Analyze\TsDuckAnalyzeAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Cache\StoreStreamDiagnosticTimeStampAction;
use App\Actions\Streams\Analyze\CheckIfStreamCanBeKillAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class StreamDiagnosticTsDuckService
{
    public function __construct($streamId)
    {
        $stream = Stream::find($streamId)->load('processes');
        if ($stream->status != Stream::STATUS_MONITORING) {
            (new UpdateStreamStatusAction())->execute(stream: $stream, status: Stream::STATUS_STARTING);
        }
        $this->monitoring(stream: $stream);
    }

    public function monitoring(object $stream)
    {
        while (true) {
            // kontrola zda stream má být dohledován
            if ($this->check_if_stream_can_be_kill(stream: $stream) == true) {
                $this->change_stream_status_and_release_them(stream: $stream);
                // kill process
                (new KillTsDuckStreamProcessAction())->execute($stream);
                exit();
            }

            // provedení analýzi streamu
            $analyzeResultInJson = (new TsDuckAnalyzeAction())->execute(streamUrl: $stream->stream_url);

            $analyzedResultInArray = json_decode(json: $analyzeResultInJson, associative: true);

            // kontrola výstupu
            if (is_null($analyzedResultInArray)) {
                (new UpdateStreamStatusAction())->execute(stream: $stream, status: Stream::STATUS_CAN_NOT_START);
            } else {

                if ($stream->status != Stream::STATUS_MONITORING) {
                    (new UpdateStreamStatusAction())->execute(stream: $stream, status: Stream::STATUS_MONITORING);
                }

                // (new StreamDiagnosticTsDuckAnalyzedService(collect($analyzedResultInArray), stream: $stream));
                // (new StreamDiagnosticFfProbeService($stream));
                // (new StoreStreamDiagnosticTimeStampAction())->execute(stream: $stream);
            }

            unset($analyzeResultInJson, $analyzedResultInArray);

            sleep(4);
        }
    }

    protected function check_if_stream_can_be_kill(object $stream): bool
    {
        // kontrola existence streamu
        if (Cache::has('stream_' . $stream->id)) {
            return false;
        }

        return (new CheckIfStreamCanBeKillAction(streamUrl: $stream->stream_url))->execution() == true
            ? true
            : false;
    }

    protected function change_stream_status_and_release_them(object $stream)
    {
        (new UnlockStreamUrlAction(stream: $stream))->execute();
        (new UpdateStreamStatusAction())->execute(stream: $stream, status: Stream::STATUS_STOPPED);
        // remove stored pid
        (new DeleteStreamPidProcessAction())->execute(stream: $stream);
    }
}
