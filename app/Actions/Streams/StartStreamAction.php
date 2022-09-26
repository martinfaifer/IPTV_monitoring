<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;

class StartStreamAction
{
    public function execute(Stream $stream): bool
    {
        return rescue(function () use ($stream) {
            (new UnlockStreamUrlAction($stream))->handle();

            $stream->update([
                'status' => Stream::STATUS_WAITING
            ]);

            return true;
        }, function () {
            false;
        });
    }
}
