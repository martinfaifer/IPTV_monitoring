<?php

namespace App\Actions\Network;

use App\Models\AvgNetworkSpeed;

class ShowAvgNetworkSpeedAction
{
    public function execute()
    {
        return [
            'series' => [
                [
                    'name' => "rx",
                    'data' => $this->get_list_from_array(AvgNetworkSpeed::orderBy('created_at', 'asc')->get('rx'), "rx")
                ],
                [
                    'name' => "tx",
                    'data' => $this->get_list_from_array(AvgNetworkSpeed::orderBy('created_at', 'asc')->get('tx'), 'tx')
                ],
            ],
            'categories' => $this->get_list_from_array(AvgNetworkSpeed::orderBy('created_at', 'asc')->get('created_at'), 'created_at', true)
        ];
    }

    protected function get_list_from_array($array, string $key, bool $isDate = false)
    {
        $result = [];
        if ($isDate == true) {
            foreach ($array as $val) {
                $result[$val[$key]->format('d.m. H:i')] = $val[$key]->format('d.m. H:i');
            }
            return $result;
        }

        foreach ($array as $val) {
            $result[] = $val[$key];
        }

        return $result;
    }
}
