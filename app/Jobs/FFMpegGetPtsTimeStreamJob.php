<?php

namespace App\Jobs;

use App\Models\ProblemPts;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use App\Actions\Streams\FFMpeg\FFMpegGetPtsTimeStreamAction;
use App\Models\StreamPtsHistory;

class FFMpegGetPtsTimeStreamJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public object $stream)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $ptsTime = (new FFMpegGetPtsTimeStreamAction())->execute(stream: $this->stream);

        if ($ptsTime == 2) {
            rescue(function () {
                $this->stream->problemPts->delete();
            });
        } else {
            ProblemPts::firstOrCreate(
                ['stream_id' => $this->stream->id]
            );
        }

        StreamPtsHistory::create([
            'stream_id' => $this->stream->id,
            'pts' => $ptsTime
        ]);
    }
}
