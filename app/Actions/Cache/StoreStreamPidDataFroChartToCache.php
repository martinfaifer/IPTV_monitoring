<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class StoreStreamPidDataFroChartToCache
{
    public function execute($key, $value, $pid)
    {
        $newdata = [
            'value' => $value,
            'pid' => $pid,
            'created_at' => date('H:i:s'),
        ];

        if (Cache::has($key)) {
            $originalContent = Cache::get($key);
            $originalContent[] = [...$newdata];

            if (count((array)$originalContent) == 50) {
                array_shift($originalContent);
            }

            Cache::put($key, $originalContent,  now()->addMinutes(5));
        } else {
            Cache::put($key, [
                $newdata,
            ], now()->addMinutes(5));
        }
    }
}
