<?php

namespace App\Jobs;

use App\Models\Stream;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Process;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Actions\Streams\StoreStreamDiagnosticPidAction;

class StartStreamDiagnosticJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * create new job instance
     *
     * @param  object  $stream
     */
    public function __construct(public object $stream)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // vyčištění cache
        // Cache::pull($this->stream->id . "_" . Stream::STATUS_CAN_NOT_START);

        $processPid = shell_exec("nohup php artisan stream:diagnostic {$this->stream->id}" . ' > /dev/null 2>&1 & echo $!');
        (new StoreStreamDiagnosticPidAction())->execute($this->stream->id, $processPid);
    }
}
