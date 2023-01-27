<?php

namespace App\Jobs;

use App\Models\Stream;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class StartStreamDiagnosticJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    protected $stream;

    /**
     * create new job instance
     *
     * @param  object  $stream
     */
    public function __construct(object $stream)
    {
        $this->stream = $stream;
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return 'tsduck_streamId_' . $this->stream->id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->stream->update([
            'status' => Stream::STATUS_WAITING,
        ]);
        // vyčištění cache
        Cache::pull($this->stream->id . "_" . Stream::STATUS_CAN_NOT_START);

        $processPid = shell_exec("nohup php artisan stream:diagnostic {$this->stream->id}" . ' > /dev/null 2>&1 & echo $!; ');

        Cache::put('streamIsMonitoring_' . $this->stream->id, [
            'processPid' => $processPid,
        ]);
    }
}
