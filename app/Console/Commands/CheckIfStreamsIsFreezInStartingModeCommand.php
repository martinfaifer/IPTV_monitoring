<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Jobs\StartStreamDiagnosticJob;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;

class CheckIfStreamsIsFreezInStartingModeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:check_if_stream_is_freeze_in_starting';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check all streams, if they, are freeze in starting mode';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $freezeStreams = Stream::where('status', Stream::STATUS_STARTING)->where('created_at', '<=', now()->subMinutes(5)->toDateTimeString())->get();

        if (count($freezeStreams) != 0) {
            foreach ($freezeStreams as $freezeStream) {
                (new UnlockStreamUrlAction($freezeStream))->handle();
                StartStreamDiagnosticJob::dispatch($freezeStream);
            }
        }
    }
}
