<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use App\Actions\Streams\StopStreamAction;
use App\Actions\Streams\UpdateStreamStatusAction;

class SheduledStreamsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:sheduler';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatic streams kill or start';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $currentDay = date('Y-m-d');
        $currentTime = date('H:i');

        $time = $currentDay . " " . $currentTime;

        Stream::with('sheduler')->chunk(50, function ($streams) use ($time, $currentTime) {
            $streams->each(function ($stream) use ($time, $currentTime) {
                if (count($stream->sheduler) > 0) {

                    foreach ($stream->sheduler as $sheduler) {

                        // check if is daily sheduler
                        if ($sheduler->is_daily == true) {
                            $time = $currentTime;
                        }

                        // time to kill stream
                        if ($sheduler->start_time == $time) {
                            // kill
                            (new StopStreamAction())->execute($stream);
                        }

                        //
                        if ($sheduler->end_time == $time) {
                            // update status to waiting || keep it if is monitored or can_not_start
                            $stream->update([
                                'status' => Stream::STATUS_WAITING
                            ]);
                        }
                    }
                }
            });
        });
    }
}
