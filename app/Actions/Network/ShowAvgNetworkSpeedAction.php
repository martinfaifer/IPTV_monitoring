<?php

namespace App\Actions\Network;

use App\Models\AvgNetworkSpeed;
use App\Traits\Charts\GetListFromArrayTrait;

class ShowAvgNetworkSpeedAction
{

    use GetListFromArrayTrait;

    public function execute()
    {
        return [
            'series' => [
                [
                    'name' => 'rx',
                    'data' => $this->get_list_from_array(AvgNetworkSpeed::latest()->take(30)->get(['rx', 'created_at']), 'rx'),
                ],
                [
                    'name' => 'tx',
                    'data' => $this->get_list_from_array(AvgNetworkSpeed::latest()->take(30)->get(['tx', 'created_at']), 'tx'),
                ],
            ],
            'categories' => $this->get_list_from_array(AvgNetworkSpeed::latest()->take(30)->get('created_at'), 'created_at', true),
        ];
    }
}
