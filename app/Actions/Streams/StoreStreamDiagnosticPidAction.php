<?php

namespace App\Actions\Streams;

use App\Models\StreamProcessPid;

class StoreStreamDiagnosticPidAction
{
    public function execute(int $streamId, int|null $diagnosticPid = null): void
    {
        if (!StreamProcessPid::where('stream_id', $streamId)->first()) {
            StreamProcessPid::create([
                'stream_id' => $streamId,
                'diagnostic_pid' => $diagnosticPid
            ]);
        }
    }
}
