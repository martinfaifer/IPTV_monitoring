<?php

namespace App\Console\Commands;

use App\Jobs\StartStreamDiagnosticJob;
use App\Models\Stream;
use Illuminate\Console\Command;

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
        $streams = Stream::where('status', Stream::STATUS_WAITING)->orWhere('status', Stream::STATUS_CRASH)->get();
        foreach ($streams as $stream) {
            StartStreamDiagnosticJob::dispatch($stream);
        }
    }
}
