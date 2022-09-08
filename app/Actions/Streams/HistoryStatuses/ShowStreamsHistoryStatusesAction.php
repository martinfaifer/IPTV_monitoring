<?php

namespace App\Actions\Streams\HistoryStatuses;

use App\Models\StreamsHistoryStatus;
use Illuminate\Support\Arr;

class ShowStreamsHistoryStatusesAction
{

    const DATA_FOR_TWO_HOURS = 120;
    public function execute()
    {
        return [
            'series' => [
                [
                    'name' => "stoped",
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::orderBy('created_at', 'asc')->take(self::DATA_FOR_TWO_HOURS)->get('stoped'), "stoped")
                ],
                [
                    'name' => "active",
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::orderBy('created_at', 'asc')->take(self::DATA_FOR_TWO_HOURS)->get('active'), 'active')
                ],
                [
                    'name' => "waiting",
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::orderBy('created_at', 'asc')->take(self::DATA_FOR_TWO_HOURS)->get('waiting'), 'waiting')
                ],
                [
                    'name' => "problem",
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::orderBy('created_at', 'asc')->take(self::DATA_FOR_TWO_HOURS)->get('problem'), 'problem')
                ]
            ],
            'categories' => $this->get_list_from_array(StreamsHistoryStatus::orderBy('created_at', 'asc')->take(self::DATA_FOR_TWO_HOURS)->get('created_at'), 'created_at', true)
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
