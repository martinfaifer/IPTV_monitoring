<?php

namespace App\Actions\System\Process;

use Illuminate\Support\Facades\Cache;

class KillTsDuckStreamProcessAction
{
    public function execute(object $stream)
    {
        try {
            if (Cache::has('streamIsMonitoring_' . $stream->id)) {
                $processPid = Cache::get('streamIsMonitoring_' . $stream->id);
                shell_exec("kill -9 {$processPid['processPid']}");
                Cache::pull('streamIsMonitoring_' . $stream->id);
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
