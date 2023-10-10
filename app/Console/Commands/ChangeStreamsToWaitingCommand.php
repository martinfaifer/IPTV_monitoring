<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

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
        Stream::where('status', Stream::STATUS_STOPPED)->chunk(50, function ($streams) {
            $streams->each(function ($stream) {
                Cache::pull($stream->stream_url . '_stop');
                $stream->update([
                    'status' => Stream::STATUS_WAITING,
                ]);
            });
        });
    }
}
