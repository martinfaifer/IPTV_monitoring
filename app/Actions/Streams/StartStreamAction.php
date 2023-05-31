<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class StartStreamAction
{
    public function execute(Stream $stream): bool
    {
        try {
            (new UnlockStreamUrlAction($stream))->execute();

            // kill stream
            (new KillTsDuckStreamProcessAction())->execute($stream);
            $stream->update([
                'status' => Stream::STATUS_WAITING
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
