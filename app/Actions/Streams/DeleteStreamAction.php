<?php

namespace App\Actions\Streams;

class DeleteStreamAction
{
    public function execute(object $stream): bool
    {
        return $stream->delete();
    }
}
