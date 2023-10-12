<?php

namespace App\Actions\Streams;

use App\Models\StreamProcessPid;

class StoreStreamDiagnosticPidAction
{
    public function execute(int $streamId, int|null $diagnosticPid = null): void
    {
        $streamProcess = StreamProcessPid::where('stream_id', $streamId)->first();
        if (!$streamProcess) {
            StreamProcessPid::create([
                'stream_id' => $streamId,
                'diagnostic_pid' => $diagnosticPid
            ]);
        }
        // else {
        //     $streamProcess->update([
        //         'diagnostic_pid' => $diagnosticPid
        //     ]);
        // }
    }
}
