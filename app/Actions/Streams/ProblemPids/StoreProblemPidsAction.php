<?php

namespace App\Actions\Streams\ProblemPids;

use App\Models\StreamProblemPid;

class StoreProblemPidsAction
{
    public function execute(string $pid, int $pidErrors, int $streamId): void
    {
        StreamProblemPid::create([
            'stream_id' => $streamId,
            'pid' => $pid,
            'errors' => $pidErrors,
        ]);
    }
}
