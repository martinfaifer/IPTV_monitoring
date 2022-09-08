<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use App\Jobs\StartStreamDiagnosticJob;

class StartStoppedStreamsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:start_stopped';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Start all stopped streams';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $streams = Stream::where('status', Stream::STATUS_STOPPED)->get();
        foreach ($streams as $stream) {
            StartStreamDiagnosticJob::dispatch($stream);
        }
    }
}
