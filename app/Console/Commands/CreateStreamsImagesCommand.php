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
        shell_exec('chmod -R 1777 storage/app/public/streamImages/');
        sleep(1);
        Stream::where('status', Stream::STATUS_MONITORING)->chunk(20, function ($streams) {
            foreach ($streams as $stream) {
                CreateImageFromStreamJob::dispatch($stream);
            }
        });
    }
}
