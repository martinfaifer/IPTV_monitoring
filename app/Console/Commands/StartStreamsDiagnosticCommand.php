<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Jobs\StartStreamDiagnosticJob;
use Illuminate\Support\Facades\Artisan;

class StartStreamsDiagnosticCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:start_diagnostic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Start diagnostic all streams';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // označení všech streamu jako waiting pro spuštění
        $streams = Stream::isNotMonitored()->get();
        foreach ($streams as $stream) {
            // Cache::forget('stream_' . $stream->id);
            // Cache::put('stream_' . $stream->id, $stream);
            if (is_null($stream->diagnostic_pid) || is_null($stream->diagnostic_pid->diagnostic_pid)) {
                StartStreamDiagnosticJob::dispatch($stream);
                usleep(500000); // sleep for 0,5s
            }
        }
    }
}
