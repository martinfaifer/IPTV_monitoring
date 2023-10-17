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
            $data = GpuChart::limit('30')
                ->select('id', $column, 'created_at')->orderByDesc('id')->get();

        } else {
            $data = Healt::byName($check_name)->get();
            $column = 'short_summary';
        }
        return [
            'series' => [
                [
                    'name' => $check_name,
                    'data' => $this->get_list_from_array($data, $column),
                ],
            ],
            'categories' => $this->get_list_from_array($data, 'created_at', true),
        ];
    }
}
