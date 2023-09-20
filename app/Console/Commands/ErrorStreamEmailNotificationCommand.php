<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Jobs\SendEmailJob;
use App\Models\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Console\Command;
use App\Models\SendedStreamEmail;

class ErrorStreamEmailNotificationCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:send-error-stream-email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sending email notifications with error streams older than 12 hours';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if (!Notification::first()) {
            die();
        }

        $notifications = Notification::get();

        //get older error streams than twelve hours
        $streams = Stream
            ::where('status', Stream::STATUS_CAN_NOT_START)
            ->where('updated_at', '<=', Carbon::now()->subHours(12)->toDateTimeString())
            ->with('sendedAlert')
            ->get();

        if ($streams->isEmpty()) {
            die();
        }

        foreach ($streams as $stream) {
            if (is_null($stream->sendedAlert)) {

                foreach ($notifications as $notification) {
                    // send email
                    SendEmailJob::dispatch(
                        $notification->email,
                        "Nefunkční kanál " . $stream->nazev,
                        'Nefunguje kanál ' . $stream->nazev
                    );
                }

                // store sended alert
                SendedStreamEmail::create([
                    'stream_id' => $stream->id
                ]);
            }
        }
    }
}
