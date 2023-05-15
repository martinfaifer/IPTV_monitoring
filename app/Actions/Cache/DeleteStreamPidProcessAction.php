<?php

namespace App\Actions\Cache;

use App\Models\StreamProcessPid;
use Illuminate\Support\Facades\Cache;

class DeleteStreamPidProcessAction
{
    public function execute(object $stream)
    {
        Cache::pull('streamIsMonitoring_' . $stream->id);
        StreamProcessPid::where('stream_id', $stream->id)->delete();
    }
}
