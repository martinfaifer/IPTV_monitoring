<?php

namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Cache;

class UnlockStreamUrlAction
{
    public function __construct(public object $stream)
    {
    }

    public function handle()
    {
        Cache::pull('streamIsMonitoring_' . $this->stream->id);
        Cache::pull($this->stream->stream_url . "_stop");
    }
}
