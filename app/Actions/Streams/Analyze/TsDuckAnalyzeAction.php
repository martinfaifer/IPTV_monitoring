<?php

namespace App\Actions\Streams\Analyze;

class TsDuckAnalyzeAction
{
    public function execute(string $streamUrl)
    {
        if (str_contains($streamUrl, 'http')) {
            return shell_exec("tsp -I http {$streamUrl} -P until -s 1 -P analyze --normalized -O drop");
        }

        return shell_exec("tsp -I ip {$streamUrl} -P until -s 1 -P analyze --normalized -O drop");
    }

    // spustení streamu ve vlc / mozna i v prohlížeči?
    // tsp -I http --infinite http://172.17.2.3:10224/udp/239.250.6.25:1234 -P analyze --normalized -O play
}
