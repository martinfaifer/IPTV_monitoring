<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;

class ChangeStreamsToWaitingCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:asWaiting';

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
        $streams = Stream::where('status', Stream::STATUS_STOPPED)->get();
        if (count($streams) > 0) {
            foreach ($streams as $stream) {
                $stream->update([
                    'status' => Stream::STATUS_WAITING,
                ]);
            }
        }
    }
}
