<?php

namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Process;

class TsDuckAnalyzeAction
{
    public function execute(string $streamUrl)
    {
        try {
            if (str_contains($streamUrl, 'http')) {
                $command = "timeout -k 1 2s tsp -I http {$streamUrl} -P until -s 1 -P analyze --json -O drop";
            } else {
                $command = "timeout -k 1 2s tsp -I ip {$streamUrl} -P until -s 1 -P analyze --json -O drop";
            }

            $result = shell_exec($command);
            return $result;
        } catch (\Throwable $th) {
            return null;
        }
    }

    // spustení streamu ve vlc / mozna i v prohlížeči?
    // tsp -I http --infinite http://172.17.2.3:10224/udp/239.250.6.25:1234 -P analyze --normalized -O play
}
