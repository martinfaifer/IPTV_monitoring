<?php

namespace App\Console\Commands;

use App\Models\Stream;
use App\Services\StreamDiagnostic\TSDuck\StreamDiagnosticTsDuckService;
use Illuminate\Console\Command;

ini_set('memory_limit', '128M');
class StreamDiagnoticCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'stream:diagnostic {streamId}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Spuštění diagnostiky streamu';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        (new StreamDiagnosticTsDuckService(Stream::find($this->argument('streamId'))));
    }
}
