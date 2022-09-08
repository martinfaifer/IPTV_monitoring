<?php

namespace App\Console\Commands;

use App\Models\NetworkStatistic;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class TakeNetworkDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'system:take_network_data';

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
        $rx = shell_exec("cat /sys/class/net/enp4s0f1/statistics/rx_bytes");
        $tx = shell_exec("cat /sys/class/net/enp4s0f1/statistics/tx_bytes");
        NetworkStatistic::create([
            'rx' => $rx,
            'tx' => $tx
        ]);

        Artisan::call('system:calculate_network_speed');
    }
}
