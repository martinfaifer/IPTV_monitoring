<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Jobs\FfprobeAnalyzeJob;
use Illuminate\Console\Command;
use App\Services\StreamDiagnostic\FFMpeg\StreamDiagnosticFfProbeService;

class FfprobeDiagnosticDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ffprobe:analyze_streams';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get all running streams and analyze via ffprobe processor';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        Stream::where('status', Stream::STATUS_MONITORING)->chunk(20, function ($streams) {
            $streams->each(function ($stream) {
                FfprobeAnalyzeJob::dispatch($stream);
            });
        });
    }
}
