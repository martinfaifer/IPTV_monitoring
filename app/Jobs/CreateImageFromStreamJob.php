<?php

namespace App\Jobs;

use App\Actions\Streams\FFMpeg\FFMpegCreateImageFromStreamAction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateImageFromStreamJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    protected $stream;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(object $stream)
    {
        $this->stream = $stream;
    }

    /**
     * Delete the job if its models no longer exist.
     *
     * @var bool
     */
    public $deleteWhenMissingModels = true;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            (new FFMpegCreateImageFromStreamAction())->execute($this->stream);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
