<?php

namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Cache;

class MarkStreamForKillAction
{
    public function __construct(public string $streamUrl)
    {
    }

    public function execution()
    {
        Cache::put($this->streamUrl . '_stop', []);
    }
}
