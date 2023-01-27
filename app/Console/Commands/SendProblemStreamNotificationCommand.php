<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Models\Notification;
use App\Models\SlackChannel;
use Illuminate\Console\Command;
use App\Jobs\SendProblemStreamJob;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Jobs\SendSlackNotificationJob;

class SendProblemStreamNotificationCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:send_problem_stream_notification_information';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send notification about problem stream';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $streamNames = [];

        // check if is any email to send message
        if (Notification::count() > 0) {
            $notificationEmails = Notification::get();
        }

        if (Stream::where('status', Stream::STATUS_CAN_NOT_START)->count() > 0) {
            $crashedStreams = Stream::where('status', Stream::STATUS_CAN_NOT_START)->get();
        }

        // fill crashed stream names
        if (!$crashedStreams) {
            exit();
        }
        foreach ($crashedStreams as $crashedStream) {
            if (!Cache::has($crashedStream->id . '_notificationSended')) {
                Cache::put($crashedStream->id . '_notificationSended', []);
                array_push($streamNames, $crashedStream->nazev);
            }
        }

        if (!empty($streamNames)) {
            $streamNamesString = implode(',', $streamNames);

            // send emails
            if ($notificationEmails) {
                foreach ($notificationEmails as $email) {
                    SendProblemStreamJob::dispatch($email->email, $streamNamesString);
                }
            }

            // slack alert
            SendSlackNotificationJob::dispatch("Kanály ve výpadku " . $streamNamesString);
        }
    }
}
