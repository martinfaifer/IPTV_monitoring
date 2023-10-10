<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Jobs\SendEmailJob;
use App\Models\Notification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Jobs\SendSlackNotificationJob;

class UncheckProblemStreamFromCacheCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:send_ok_stream_notification_information';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Stream::get()->each(function ($stream) {
            if ($stream->status != Stream::STATUS_CAN_NOT_START) {
                if (Cache::has($stream->id . '_notificationSended')) {
                    // send information about function stream

                    // slack notification
                    SendSlackNotificationJob::dispatch("Kanál  " . $stream->nazev . " v pořádku.");

                    // send email notification
                    if (Notification::count() > 0) {
                        foreach (Notification::get() as $email) {
                            SendEmailJob::dispatch($email->email, "Stream " . $stream->nazev . "je v pořádku.", $stream->nazev . " OK");
                        }
                    }
                    // odebrání z cache
                    Cache::pull($stream->id . '_notificationSended');
                }
            }
        });
    }
}
