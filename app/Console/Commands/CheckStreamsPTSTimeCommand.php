<?php

namespace App\Console\Commands;

use App\Models\ProblemPts;
use App\Models\Stream;
use Illuminate\Console\Command;
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
        $getPtsTime = new FFMpegGetPtsTimeStreamAction();

        foreach ($streams as $stream) {
            $ptsTime = $getPtsTime->execute(stream: $stream);

            match ($ptsTime) {
                config('services.pts.time') => $stream->problemPts->delete(),
                0 => $stream->problemPts->delete(), // in stream is not find pts time
                default => ProblemPts::firstOrCreate(
                    ['stream_id' => $stream->id]
                )
            };
        }
    }
}
