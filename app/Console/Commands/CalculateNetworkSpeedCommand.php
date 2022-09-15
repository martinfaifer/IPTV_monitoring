<?php

namespace App\Console\Commands;

use App\Models\AvgNetworkSpeed;
use App\Models\NetworkStatistic;
use Illuminate\Console\Command;

class CalculateNetworkSpeedCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'system:calculate_network_speed';

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
        $dataForOneMinute = NetworkStatistic::take(2)->get();
        if (! count($dataForOneMinute) == 2) {
            exit();
        }
        foreach ($dataForOneMinute as $value) {
            $created_at = $value->created_at;
            $txs[] = $value->tx;
            $rxs[] = $value->rx;
        }
        $diffTx = $txs[1] - $txs[0];
        $avgTx = $diffTx / 7500000;

        $diffRx = $rxs[1] - $rxs[0];
        $avgRx = $diffRx / 7500000;

        AvgNetworkSpeed::create([
            'tx' => $avgTx,
            'rx' => $avgRx,
            'avg_time' => $created_at,
        ]);

        NetworkStatistic::first()->delete();
    }
}
