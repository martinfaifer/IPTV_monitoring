<?php

namespace App\Actions\Health\Charts;

use App\Models\GpuChart;
use App\Models\Healt;
use App\Traits\Charts\GetListFromArrayTrait;

class GetHealthChartsDataAction
{
    use GetListFromArrayTrait;
    public function execute(string $check_name): array
    {
        if (str_contains($check_name, 'gpu')) {
            $data = GpuChart::limit('30')
                ->select('id', function () use ($check_name) {
                    if ($check_name == 'GpuUtil') {
                        return "gpu_util";
                    }

                    if ($check_name == 'GpuFanSpeed') {
                        return "fan_speed";
                    }

                    if ($check_name == 'GpuUsedMemory') {
                        return "used_memory";
                    }
                }, 'created_at')
                ->orderByDesc('id')->get();
        } else {
            $data = Healt::byName($check_name)->get();
        }
        return [
            'series' => [
                [
                    'name' => $check_name,
                    'data' => $this->get_list_from_array($data, 'short_summary'),
                ],
            ],
            'categories' => $this->get_list_from_array($data, 'created_at', true),
        ];
    }
}
