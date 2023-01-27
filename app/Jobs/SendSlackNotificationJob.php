<?php

namespace App\Jobs;

use App\Models\Stream;
use App\Models\SlackChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Http;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Spatie\SlackAlerts\Facades\SlackAlert;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendSlackNotificationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    protected $payload;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $payload)
    {
        $this->payload = $payload;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (SlackChannel::count() > 0) {
            $notificationSlackChannels = SlackChannel::get();
            foreach ($notificationSlackChannels as $notificationSlackChannel) {
                Http::post($notificationSlackChannel->webhook, array(
                    'text' => $this->payload
                ));
            }
        }
    }

    // protected function check_status_and_return_human_response(): string
    // {
    //     return match ($this->streamStatus) {
    //         Stream::STATUS_WAITING => "čeká na spuštění",
    //         Stream::STATUS_MONITORING => "spuštěn dohled",
    //         Stream::STATUS_STARTING => "zařazen do fronty ke spuštění",
    //         Stream::STATUS_STOPPED => "zastaven",
    //         Stream::STATUS_CAN_NOT_START => "ve výpadku",
    //         Stream::STATUS_CRASH => "ve výpadku",
    //         Stream::STATUS_ISSUE => "objevili se chyby",
    //         Stream::STATUS_DELETED => "odebrán",
    //         default => ""
    //     };
    // }
}
