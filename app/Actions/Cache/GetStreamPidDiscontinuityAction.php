<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class GetStreamPidDiscontinuityAction
{
    public function execute(object $stream, int $pid)
    {
        if (Cache::has('streamDiscontinuityPidErrors_'.$pid.'_'.$stream->id)) {
            return Cache::get('streamDiscontinuityPidErrors_'.$pid.'_'.$stream->id);
        }

        return 0;
    }
}
