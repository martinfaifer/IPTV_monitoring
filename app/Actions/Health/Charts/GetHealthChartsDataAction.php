<?php

namespace App\Actions\Health\Charts;

use App\Models\Healt;
use App\Traits\Charts\GetListFromArrayTrait;

class GetHealthChartsDataAction
{
    use GetListFromArrayTrait;
    public function execute(string $check_name): array
    {
        $data = Healt::byName($check_name)->get();
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
