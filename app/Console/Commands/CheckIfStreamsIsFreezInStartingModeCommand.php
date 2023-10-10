<?php

namespace App\Console\Commands;

use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Jobs\StartStreamDiagnosticJob;
use App\Models\Stream;
use Illuminate\Console\Command;

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
        Stream::where('status', Stream::STATUS_STARTING)->where('created_at', '<=', now()->subMinutes(5)->toDateTimeString())->chunk(10, function ($freezeStreams) {
            $freezeStreams->each(function ($freezeStream) {
                (new UnlockStreamUrlAction($freezeStream))->handle();
                StartStreamDiagnosticJob::dispatch($freezeStream);
            });
            sleep(1);
        });
    }
}
