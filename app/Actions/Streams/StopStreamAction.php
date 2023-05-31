<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
use App\Actions\Cache\DeleteStreamPidProcessAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class StopStreamAction
{
    public function execute(object $stream): bool
    {
        try {
            Cache::pull($stream->id . "_" . Stream::STATUS_CAN_NOT_START);
            (new MarkStreamForKillAction($stream->stream_url))->execution();
            (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_STOPPED);
            (new KillTsDuckStreamProcessAction())->execute($stream);
            // remove process pid
            (new DeleteStreamPidProcessAction())->execute($stream);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
