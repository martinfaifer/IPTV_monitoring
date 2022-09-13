<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Actions\Streams\Analyze\MarkStreamForKillAction;

class KillAllStreamsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:kill';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Kill all streams ';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $streams = Stream::get();
        if(count($streams) != 0) {
            foreach ($streams as $stream) {
                (new MarkStreamForKillAction($stream->stream_url))->execution();
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_STOPPED);
            }
        }
    }
}
