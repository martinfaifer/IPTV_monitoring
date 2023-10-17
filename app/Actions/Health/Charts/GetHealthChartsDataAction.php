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
        if (str_contains($check_name, 'Gpu')) {

            if ($check_name == 'GpuUtil') {
                $column = "gpu_util";
            }

            if ($check_name == 'GpuFanSpeed') {
                $column = "fan_speed";
            }

            if ($check_name == 'GpuUsedMemory') {
                $column = "used_memory";
            }
            $data = GpuChart::take('30')
                ->orderByDesc('id')->get(['id', $column, 'created_at']);

            // dd($data);
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
