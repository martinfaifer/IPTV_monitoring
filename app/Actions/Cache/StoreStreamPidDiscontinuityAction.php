<?php

namespace App\Actions\Cache;

use App\Events\StreamDiscontinuityPidErrorsEvent;
use Illuminate\Support\Facades\Cache;

class StoreStreamPidDiscontinuityAction
{
    /**
     * uložení discontinuity erroru k pid u streamu
     *
     * @param  string  $key
     * @param  int  $dicontinuity
     * @return void
     */
    public function execute(string $key, int $dicontinuity): void
    {
        if ($dicontinuity != 0) {
            if (Cache::has($key)) {
                $dicontinuities = Cache::get($key);
                $dicontinuity = $dicontinuities + $dicontinuity;
            }

            Cache::put($key, $dicontinuity);
            // 'streamDiscontinuityPidErrors_' . $audioPidId . '_' . $stream->id => channel
            StreamDiscontinuityPidErrorsEvent::dispatch($key, $dicontinuity);
        }
    }
}
