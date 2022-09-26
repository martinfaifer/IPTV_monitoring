<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Jobs\StartStreamDiagnosticJob;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;

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

        $streams = Stream::where('status', Stream::STATUS_MONITORING)
            ->get();
        if (count($streams) > 0) {

            foreach ($streams as $stream) {
                $cachedLastDiagnosticTime = Cache::get('lastDiagnosticTime_' . $stream->id);
                if (!is_null($cachedLastDiagnosticTime)) {
                    if ($cachedLastDiagnosticTime['time'] <= strtotime('-1 minute')) {
                        (new UnlockStreamUrlAction($stream))->handle();
                        StartStreamDiagnosticJob::dispatch($stream);
                    }
                }
            }
        }
    }
}
