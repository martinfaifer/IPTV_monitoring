<?php

namespace App\Console\Commands;

use App\Models\AvgNetworkSpeed;
use Illuminate\Support\Carbon;
use Illuminate\Console\Command;
use App\Models\NetworkStatistic;
use App\Models\StreamHistoryStatus;

class PrunDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'system:data_command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        AvgNetworkSpeed::where('created_at', '<=', Carbon::now()->subDay()->toDateTimeString())->delete();
        NetworkStatistic::where('created_at', '<=', Carbon::now()->subDay()->toDateTimeString())->delete();
        StreamHistoryStatus::where('created_at', '<=', Carbon::now()->subDays(2)->toDateTimeString())->delete();
    }
}
