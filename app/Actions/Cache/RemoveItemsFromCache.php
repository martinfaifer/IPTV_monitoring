<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class RemoveItemsFromCache
{
    /**
     * remove item from cache
     *
     * @param  string  $key
     * @return void
     */
    public function execute(string $key): void
    {
        if (Cache::has($key)) {
            Cache::pull($key);
        }
    }
}
