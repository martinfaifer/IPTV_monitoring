<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class GetStreamsHistoryAction
{
    public function execute()
    {
        if (Cache::has('streamsErrorHistory')) {
            $history = Cache::get('streamsErrorHistory');

            return array_reverse($history);
        }

        return [];
    }
}
