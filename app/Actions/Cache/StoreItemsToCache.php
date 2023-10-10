<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class StoreItemsToCache
{
    /**
     * store items to cache, by key, where is check if key exists a deleted
     *
     * @param  string  $key
     * @param  array  $value
     * @return void
     */
    public function execute(string $key, array $value): void
    {
        Cache::put($key, $value);
    }
}
