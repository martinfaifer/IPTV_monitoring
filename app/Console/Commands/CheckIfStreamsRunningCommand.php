<?php

namespace App\Console\Commands;

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
        $cmds = [];

        Stream::where('status', Stream::STATUS_MONITORING)
            ->chunk(10, function ($streams) {
                $streams->each(function ($stream) {
                    $cachedLastDiagnosticTime = Cache::get('lastDiagnosticTime_'.$stream->id);
                    if (! is_null($cachedLastDiagnosticTime)) {
                        if ($cachedLastDiagnosticTime['time'] <= strtotime('-1 minute')) {
                            (new UnlockStreamUrlAction($stream))->handle();
                            StartStreamDiagnosticJob::dispatch($stream);
                        }
                    }
                });
            });
    }
}
