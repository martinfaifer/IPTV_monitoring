<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use App\Actions\Api\Weather\GetWeatherAction;

class GetWeatherCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'weather:get';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for getting weather';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $weatherResponse = (new GetWeatherAction())->execute();
        Cache::put("weather", $weatherResponse);
    }
}
