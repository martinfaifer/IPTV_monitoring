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
                    'data' => $this->get_list_from_array(AvgNetworkSpeed::latest()->take(120)->get(['rx', 'created_at']), "rx")
                ],
                [
                    'name' => "tx",
                    'data' => $this->get_list_from_array(AvgNetworkSpeed::latest()->take(120)->get(['tx', 'created_at']), 'tx')
                ],
            ],
            'categories' => $this->get_list_from_array(AvgNetworkSpeed::latest()->take(120)->get('created_at'), 'created_at', true)
        ];
    }

    protected function get_list_from_array($array, string $key, bool $isDate = false)
    {
        $collection = $array->sortBy('created_at');
        $collection->values()->all();
        $result = [];
        if ($isDate == true) {
            foreach ($collection as $val) {
                $result[$val[$key]->format('d.m. H:i')] = $val[$key]->format('d.m. H:i');
            }
            return $result;
        }

        foreach ($collection as $val) {
            $result[] = $val[$key];
        }

        return $result;
    }
}
