<?php

namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Process;
// use Symfony\Component\Process\Process;
// use Symfony\Component\Process\Exception\ProcessFailedException;

class TsDuckAnalyzeAction
{
    public function execute(string $streamUrl)
    {

        try {
            if (str_contains($streamUrl, 'http')) {
                $command = "tsp -I http {$streamUrl} -P until -s 1 -P analyze --json -O drop";
            } else {
                $command = "tsp -I ip {$streamUrl} -P until -s 1 -P analyze --json -O drop";
            }

            // Create a new process instance and configure it
            $result = Process::timeout(2)->run($command);

            if ($result->failed()) {
                return null;
            }

            return $result->output();
        } catch (\Throwable $th) {
            // timeout exceeded
            echo "Timeout exceeded: " . PHP_EOL;
            return null;
        }
    }

    // spustení streamu ve vlc / mozna i v prohlížeči?
    // tsp -I http --infinite http://172.17.2.3:10224/udp/239.250.6.25:1234 -P analyze --normalized -O play
}
