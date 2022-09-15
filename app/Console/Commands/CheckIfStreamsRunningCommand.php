<?php

namespace App\Console\Commands;

use App\Actions\Streams\UpdateStreamStatusAction;
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
        $streams = Stream::where('status', Stream::STATUS_MONITORING)
            ->orWhere('status', Stream::STATUS_CAN_NOT_START)
            ->get();
        if (count($streams) > 0) {
            foreach ($streams as $stream) {
                $result = shell_exec("ps -aux | grep {$stream->stream_url}");
                if (is_string($result)) {
                    if ((count(explode("\n", $result))) <= 1) {
                        (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_CRASH);
                        Cache::pull('streamIsMonitoring_'.$stream->id);
                    }
                }
            }
        }
    }
}
