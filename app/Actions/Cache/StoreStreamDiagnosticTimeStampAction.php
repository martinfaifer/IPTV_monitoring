<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class StoreStreamDiagnosticTimeStampAction
{
    public function execute(object $stream)
    {
        if (Cache::has('lastDiagnosticTime_' . $stream->id)) {
            Cache::pull('lastDiagnosticTime_' . $stream->id);
        }

        Cache::put('lastDiagnosticTime_' . $stream->id, [
            'time' => time(),
        ]);
    }
}
