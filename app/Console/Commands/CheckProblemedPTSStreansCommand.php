<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Models\ProblemPts;
use Illuminate\Console\Command;
use App\Actions\Streams\FFMpeg\FFMpegGetPtsTimeStreamAction;

class CheckProblemedPTSStreansCommand extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:check-problemed-pts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for quickest check problemed streams';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $problemedStreams = ProblemPts::with('stream')->get();
        $getPtsTime = new FFMpegGetPtsTimeStreamAction();

        try {
            foreach ($problemedStreams as $problemedStream) {
                $ptsTime = $getPtsTime->execute(stream: $problemedStream->stream);

                if ($ptsTime == 2) {
                    rescue(function () use ($problemedStream) {
                        $problemedStream->delete();
                    });
                }
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
