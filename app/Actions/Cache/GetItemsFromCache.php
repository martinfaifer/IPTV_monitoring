<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class GetItemsFromCache
{
    public function execute($cacheKey)
    {
        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        return [];
    }
}
