<?php

namespace App\Actions\Streams;

use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Models\Stream;

class StopStreamAction
{
    public function execute(object $stream): bool
    {
        return rescue(function () use ($stream) {
            (new MarkStreamForKillAction($stream->stream_url))->execution();
            $stream->update([
                'status' => Stream::STATUS_STOPPED,
            ]);

            return true;
        }, function () {
        });
    }
}
