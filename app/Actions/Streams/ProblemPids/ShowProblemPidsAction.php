<?php

namespace App\Actions\Streams\ProblemPids;

class ShowProblemPidsAction
{
    public function execute(object $stream)
    {
        return $stream->load('problemPids');

    }
}
