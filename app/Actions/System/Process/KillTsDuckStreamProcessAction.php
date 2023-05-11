<?php

namespace App\Actions\System\Process;

use Illuminate\Support\Facades\Cache;

class KillTsDuckStreamProcessAction
{
    public function execute(object $stream)
    {
        try {
            posix_kill($stream->processes->diagnostic_pid, SIGTERM);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
