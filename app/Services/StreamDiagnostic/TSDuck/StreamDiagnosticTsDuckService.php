<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Actions\Cache\DeleteStreamPidProcessAction;
use App\Actions\Streams\Analyze\TsDuckAnalyzeAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Streams\Analyze\CheckIfStreamCanBeKillAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class StreamDiagnosticTsDuckService
{
    public $updateStatusAction;

    public function __construct(int $streamId)
    {
        $stream = Stream::find($streamId)->load('processes');
        $this->updateStatusAction = new UpdateStreamStatusAction();
        if ($stream->status != Stream::STATUS_MONITORING) {
            $this->updateStatusAction->execute(stream: $stream, status: Stream::STATUS_STARTING);
        }
        $this->monitoring(stream: $stream);
    }

    public function monitoring(object $stream)
    {
        $tsDuckAnalyzeAction = new TsDuckAnalyzeAction();
        while (1) {
            // kontrola zda stream má být dohledován
            if ($this->check_if_stream_can_be_kill(stream: $stream) == true) {
                $this->change_stream_status_and_release_them(stream: $stream);
                // kill process
                (new KillTsDuckStreamProcessAction())->execute($stream);
                exit();
            }

            // provedení analýzi streamu
            $analyzeResultInJson = $tsDuckAnalyzeAction->execute(streamUrl: $stream->stream_url);

            $analyzedResultInArray = json_decode(json: $analyzeResultInJson, associative: true);

            unset($analyzeResultInJson);

            // kontrola výstupu
            if (is_null($analyzedResultInArray)) {
                $this->updateStatusAction->execute(stream: $stream, status: Stream::STATUS_CAN_NOT_START);
                unset($analyzedResultInArray);
            } else {
                // store in to cache for showing in to frontend
                // try {
                //     (new StoreItemsToCache())->execute(key: 'streamData_' . $stream->id, value: $analyzedResultInArray);
                // } catch (\Throwable $th) {
                //     //throw $th;
                // }
                $this->updateStatusAction->execute(stream: $stream, status: Stream::STATUS_MONITORING);
                // (new StreamDiagnosticTsDuckAnalyzedService(collect($analyzedResultInArray), stream: $stream));
                // (new StreamDiagnosticFfProbeService($stream));
                // (new StoreStreamDiagnosticTimeStampAction())->execute(stream: $stream);

                unset($analyzedResultInArray);
            }

            sleep(4);
        }
    }

    protected function check_if_stream_can_be_kill(object $stream): bool
    {
        // kontrola existence streamu
        // if (Cache::has('stream_' . $stream->id)) {
        //     return false;
        // }

        // check if process exsists
        if(is_null($stream->processes)) {
            return false;
        }
        if (!posix_kill($stream->processes->diagnostic_pid, 0)) {
            return false;
        }

        return (new CheckIfStreamCanBeKillAction(streamUrl: $stream->stream_url))->execution() == true
            ? true
            : false;
    }

    protected function change_stream_status_and_release_them(object $stream)
    {
        (new UnlockStreamUrlAction(stream: $stream))->execute();
        $this->updateStatusAction->execute(stream: $stream, status: Stream::STATUS_STOPPED);
        // remove stored pid
        (new DeleteStreamPidProcessAction())->execute(stream: $stream);
    }
}
