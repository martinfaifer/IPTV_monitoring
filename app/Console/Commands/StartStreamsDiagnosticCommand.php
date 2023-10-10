<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Jobs\StartStreamDiagnosticJob;
use Illuminate\Support\Facades\Artisan;
use App\Actions\Streams\Analyze\CheckIfStreamCanBeKillAction;

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
        Stream::isNotMonitored()->with('processes')->chunk(50, function ($streams) {
            $streams->each(function ($stream) {
                try {
                    if (is_null($stream->processes)) {
                        StartStreamDiagnosticJob::dispatch($stream->id);
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
            });
        });
    }
}
