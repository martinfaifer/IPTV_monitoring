<?php

namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Cache;

class CheckAudioVideoSynchronizationAction
{
    public function execution(object $stream, int $audioStartTime, int $videoStartTime): void
    {
        if ($audioStartTime != $videoStartTime) {
            Cache::put('streanAudioVideoOutOfSync_'.$stream->id);
        } else {
            Cache::pull('streanAudioVideoOutOfSync_'.$stream->id);
        }
    }
}
