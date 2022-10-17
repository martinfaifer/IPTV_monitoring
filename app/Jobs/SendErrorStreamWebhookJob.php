<?php

namespace App\Jobs;

use App\Actions\Webhook\SendStreamCrashWebhookAction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendErrorStreamWebhookJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $stream;

    protected $status;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(object $stream, string $status)
    {
        $this->stream = $stream;
        $this->status = $status;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        (new SendStreamCrashWebhookAction())->execute($this->stream, $this->status);
    }
}
