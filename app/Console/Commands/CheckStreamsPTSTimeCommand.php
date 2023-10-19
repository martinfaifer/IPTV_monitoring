<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Models\ProblemPts;
use Illuminate\Console\Command;
use App\Jobs\FFMpegGetPtsTimeStreamJob;
use App\Actions\Streams\FFMpeg\FFMpegGetPtsTimeStreamAction;

class CheckStreamsPTSTimeCommand extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:check-pts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for checking streams pts';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $streams = Stream::checkPts()->with('problemPts')->get();
        // $getPtsTime = new FFMpegGetPtsTimeStreamAction();

        foreach ($streams as $stream) {
            FFMpegGetPtsTimeStreamJob::dispatch($stream);
        }
    }
}
