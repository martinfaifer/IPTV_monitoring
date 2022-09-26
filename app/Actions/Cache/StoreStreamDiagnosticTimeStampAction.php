<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class StoreStreamDiagnosticTimeStampAction
{
    public function execute(object $stream)
    {
        Cache::put('lastDiagnosticTime_' . $stream->id, [
            'time' => time()
        ]);
    }
}
