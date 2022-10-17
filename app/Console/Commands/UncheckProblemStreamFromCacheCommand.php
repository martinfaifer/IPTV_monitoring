<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class UncheckProblemStreamFromCacheCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cache:uncheck_sended_stream';

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
        $streams = Stream::get();

        foreach ($streams as $stream) {
            if ($stream->status != Stream::STATUS_CAN_NOT_START) {
                if (! Cache::has($stream->id.'_notificationSended')) {
                    Cache::pull($stream->id.'_notificationSended');
                }
            }
        }
    }
}
