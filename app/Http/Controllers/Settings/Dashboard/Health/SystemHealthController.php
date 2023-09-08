<?php

namespace App\Http\Controllers\Settings\Dashboard\Health;

use App\Models\AvgNetworkSpeed;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Healt;

class SystemHealthController extends Controller
{
    public function __invoke()
    {
        $usedDiskSpace = Healt::getLastByName("UsedDiskSpace")->latest()->first();
        $databaseConnectionCount = Healt::getLastByName("DatabaseConnectionCount")->latest()->first();
        $cpuLoad = Healt::getLastByName("CpuLoad")->latest()->first();
        return [
            'checkResults' => [
                [
                    'name' => $usedDiskSpace->check_name,
                    'label' => $usedDiskSpace->check_label,
                    'shortSummary' => str_replace("%", "", $usedDiskSpace->short_summary),
                    'status' => $usedDiskSpace->status,
                    'meta' => json_decode($usedDiskSpace->meta, true)

                ],
                [
                    'name' => $databaseConnectionCount->check_name,
                    'label' => $databaseConnectionCount->check_label,
                    'shortSummary' => (int) $databaseConnectionCount->short_summary / 1000,
                    'status' => $databaseConnectionCount->status,
                    'meta' => json_decode($databaseConnectionCount->meta, true)

                ],
                [
                    'name' => $cpuLoad->check_name,
                    'label' => $cpuLoad->check_label,
                    'shortSummary' => substr($cpuLoad->short_summary, 0, 1),
                    'status' => $cpuLoad->status,
                    'meta' => json_decode($cpuLoad->meta, true)

                ],
                [
                    'name' => "Sít",
                    'label' => "network",
                    'shortSummary' => ["upload" => AvgNetworkSpeed::orderBy('created_at', 'desc')->first()->tx, "download" => AvgNetworkSpeed::orderBy('created_at', 'desc')->first()->rx],
                    'status' => "",
                ],
            ]
        ];
    }
}
