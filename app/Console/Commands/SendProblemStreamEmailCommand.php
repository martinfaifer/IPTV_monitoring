<?php

namespace App\Console\Commands;

use App\Jobs\SendProblemStreamJob;
use App\Models\Notification;
use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class SendProblemStreamEmailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:send_problem_stream_information';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email notification about problem stream';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $notificationEmails = Notification::get();
        $crashedStreams = Stream::where('status', Stream::STATUS_CAN_NOT_START)->get();

        $streamNames = [];
        if (count($notificationEmails) != 0 && count($crashedStreams) != 0) {

            foreach ($crashedStreams as $crashedStream) {
                if (!Cache::has($crashedStream->id . "_notificationSended")) {
                    Cache::put($crashedStream->id . "_notificationSended", []);
                    array_push($streamNames, ...$crashedStream->nazev);
                }
            }

            if(count($streamNames) != 0) {
                $streamNamesString = implode(",",$streamNames);
                foreach($notificationEmails as $email) {
                    SendProblemStreamJob::dispatch($email->email, $streamNamesString);
                }
            }
        }
    }
}
