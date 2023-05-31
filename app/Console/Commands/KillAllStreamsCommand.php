<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Actions\Streams\StopStreamAction;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Actions\Cache\DeleteStreamPidProcessAction;
use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Actions\Streams\UpdateStreamDiagnosticPidAction;
use App\Actions\System\Process\KillAllProcessesByNameAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class KillAllStreamsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:kill';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Kill all streams ';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $streams = Stream::with('processes')->get();
        if (count($streams) != 0) {
            foreach ($streams as $stream) {
                (new StopStreamAction())->execute($stream);
            }
        }

        // kill all running process for tsduck and ffmpeg
        // (new KillAllProcessesByNameAction())->execute('tsp');
        // (new KillAllProcessesByNameAction())->execute('ffmpeg');
        // (new KillAllProcessesByNameAction())->execute('ffprobe');
    }
}
