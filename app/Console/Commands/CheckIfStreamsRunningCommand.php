<?php

namespace App\Console\Commands;

use App\Actions\Cache\Locks\CheckIfIsLockAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Jobs\StartStreamDiagnosticJob;
use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class CheckIfStreamsRunningCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:check_if_running';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cheking streams if running';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $streams = Stream::where('status', "!=", Stream::STATUS_WAITING)->orWhere('status', "!=", Stream::STATUS_STOPPED)->get();

        foreach ($streams as $stream) {
            if (!is_null($stream->processes) || !is_null($stream->processes->diagnotic_pid)) {
                // kontrola existence pidu
                if (!posix_kill($stream->processes->diagnostic_pid, 0)) {
                    // pid nenalezen
                    // spuštění diagnostiky
                    StartStreamDiagnosticJob::dispatch($stream);
                }
            }
        }
    }
}
