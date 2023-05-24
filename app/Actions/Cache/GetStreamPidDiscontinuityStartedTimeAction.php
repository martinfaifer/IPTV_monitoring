<?php
namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class GetStreamPidDiscontinuityStartedTimeAction
{
    public function execute(object $stream, string $pid)
    {
        if(Cache::has('streamDiscontinuityPidErrors_' . $pid . '_' . $stream->id . "_started")) {
            return Cache::get('streamDiscontinuityPidErrors_' . $pid . '_' . $stream->id . "_started");
        }

        return null;
    }
}
