<?php

namespace App\Actions\Streams;

use App\Models\StreamProcessPid;

class UpdateStreamDiagnosticPidAction
{
    public function execute(object $stream, int|null $diagnosticPid = null): void
    {
        if (!StreamProcessPid::where('stream_id', $stream->id)->where('diagnostic_pid', "!=", null)->first()) {
            StreamProcessPid::create([
                'stream_id' => $stream->id,
                'diagnostic_pid' => $diagnosticPid
            ]);
        }
    }
}
