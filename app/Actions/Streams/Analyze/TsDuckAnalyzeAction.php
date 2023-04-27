<?php

namespace App\Actions\Streams\Analyze;

// use Illuminate\Support\Facades\Process;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class TsDuckAnalyzeAction
{
    public function execute(string $streamUrl)
    {

        if (str_contains($streamUrl, 'http')) {
            $command = "/usr/local/bin/tsp -I http {$streamUrl} -P until -s 2 -P analyze --json -O drop";
        } else {
            $command = "/usr/local/bin/tsp -I ip {$streamUrl} -P until -s 2 -P analyze --json -O drop";
        }

        // Create a new process instance and configure it
        $process = new Process([$command]);
        $process->setTimeout(6);

        // Run the command and capture the output
        $process->run();
        $output = $process->getOutput();

        // Check for errors
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        // Parse the JSON output
        $data = json_decode($output, true);

        dd($data);
    }

    // spustení streamu ve vlc / mozna i v prohlížeči?
    // tsp -I http --infinite http://172.17.2.3:10224/udp/239.250.6.25:1234 -P analyze --normalized -O play
}
