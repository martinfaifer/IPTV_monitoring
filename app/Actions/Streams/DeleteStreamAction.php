<?php

namespace App\Actions\Streams;

use App\Actions\Streams\Analyze\MarkStreamForKillAction;

class DeleteStreamAction
{
    public function execute(object $stream): bool
    {
        // stop monitoring stream
        (new MarkStreamForKillAction($stream->stream_url))->execution();
        return $stream->delete();
    }
}
