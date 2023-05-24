<?php

namespace App\Http\Controllers\Settings\Dashboard\Health;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Healt;

class SystemHealthController extends Controller
{
    public function __invoke()
    {
        $usedDiskSpace = Healt::getLastByName("UsedDiskSpace")->latest()->first();
        $database = Healt::getLastByName("Database")->latest()->first();
        $databaseConnectionCount = Healt::getLastByName("DatabaseConnectionCount")->latest()->first();
        $redis = Healt::getLastByName("Redis")->latest()->first();
        $cpuLoad = Healt::getLastByName("CpuLoad")->latest()->first();
        return [
            'checkResults' => [
                [
                    'name' => $usedDiskSpace->check_name,
                    'label' => $usedDiskSpace->check_label,
                    'shortSummary' => $usedDiskSpace->short_summary,
                    'status' => $usedDiskSpace->status,
                    'meta' =>
                    json_decode($usedDiskSpace->meta, true)

                ],
                [
                    'name' => $database->check_name,
                    'label' => $database->check_label,
                    'shortSummary' => $database->short_summary,
                    'status' => $database->status,
                    'meta' =>
                    json_decode($database->meta, true)

                ],
                [
                    'name' => $databaseConnectionCount->check_name,
                    'label' => $databaseConnectionCount->check_label,
                    'shortSummary' => $databaseConnectionCount->short_summary,
                    'status' => $databaseConnectionCount->status,
                    'meta' =>
                    json_decode($databaseConnectionCount->meta, true)

                ],
                [
                    'name' => $redis->check_name,
                    'label' => $redis->check_label,
                    'shortSummary' => $redis->short_summary,
                    'status' => $redis->status,
                    'meta' =>
                    json_decode($redis->meta, true)

                ],
                [
                    'name' => $cpuLoad->check_name,
                    'label' => $cpuLoad->check_label,
                    'shortSummary' => $cpuLoad->short_summary,
                    'status' => $cpuLoad->status,
                    'meta' =>
                    json_decode($cpuLoad->meta, true)

                ]
            ]
        ];
    }
}
