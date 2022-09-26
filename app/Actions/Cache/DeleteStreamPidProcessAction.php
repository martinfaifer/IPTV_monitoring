<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class DeleteStreamPidProcessAction
{
    public function execute(object $stream)
    {
        Cache::pull('streamIsMonitoring_' . $stream->id);
    }
}
