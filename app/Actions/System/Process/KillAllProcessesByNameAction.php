<?php

namespace App\Actions\System\Process;

class KillAllProcessesByNameAction
{
    public function execute(string $processName)
    {

        $stringOfPids = shell_exec('pidof ' . $processName);
        if (is_null($stringOfPids)) {
            exit();
        }

        $arrayOfPids = explode(" ", str_replace("\n", "", $stringOfPids));
        foreach ($arrayOfPids as $pid) {
            shell_exec("kill -9 {$pid}");
        }
    }
}
