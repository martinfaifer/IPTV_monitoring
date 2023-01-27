<?php

namespace App\Actions\Cache;

use App\Enums\CacheKeyEnum;
use Illuminate\Support\Facades\Cache;

class UpdateStreamCacheStatusAction
{
    public function execute(string $status, int $streamId)
    {
        Cache::forget(CacheKeyEnum::STREAM_STATUS->value . '_' . $streamId);

        Cache::put(CacheKeyEnum::STREAM_STATUS->value . '_' . $streamId, [
            'value' => $status
        ]);
    }
}
