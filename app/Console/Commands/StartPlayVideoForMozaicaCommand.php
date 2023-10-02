<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use App\Actions\Streams\FFMpeg\FFMpegPlayVideoStreamAction;

class StartPlayVideoForMozaicaCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:play-video';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Start playing video for mozaica';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $streams = Stream::playVideo()->isMonitoring()->with('videoPid')->get();

        foreach ($streams as $stream) {
            if (is_null($stream->videoPid)) {
                // start process to play video
                (new FFMpegPlayVideoStreamAction())->execute($stream);
            } else {
                // check if pid exists
                if (posix_kill($stream->videoPid->pid, 0) == false) {
                    // pid not running => delete from table
                    $stream->videoPid->delete();
                    (new FFMpegPlayVideoStreamAction())->execute($stream);
                }
            }
        }
    }
}
