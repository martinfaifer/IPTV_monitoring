<?php

namespace App\Console\Commands;

use App\Jobs\CreateImageFromStreamJob;
use App\Models\Stream;
use Illuminate\Console\Command;

class CreateStreamsImagesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:create_image';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for create .jpg image from live stream';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Stream::where('status', Stream::STATUS_MONITORING)->chunk(10, function ($stream) {
            CreateImageFromStreamJob::dispatch($stream)->onQueue('ffmpeg');
        });
    }
}
