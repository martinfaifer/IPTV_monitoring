<?php

namespace App\Actions\Streams\HistoryStatuses;

use App\Models\StreamsHistoryStatus;

class ShowStreamsHistoryStatusesAction
{
    const DATA_FOR_TWO_HOURS = 120;

    public function execute()
    {
        return [
            'series' => [
                [
                    'name' => 'stoped',
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::latest()->take(self::DATA_FOR_TWO_HOURS)->get(['stoped', 'created_at']), 'stoped'),
                ],
                [
                    'name' => 'active',
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::latest()->take(self::DATA_FOR_TWO_HOURS)->get(['active', 'created_at']), 'active'),
                ],
                [
                    'name' => 'waiting',
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::latest()->take(self::DATA_FOR_TWO_HOURS)->get(['waiting', 'created_at']), 'waiting'),
                ],
                [
                    'name' => 'problem',
                    'data' => $this->get_list_from_array(StreamsHistoryStatus::latest()->take(self::DATA_FOR_TWO_HOURS)->get(['problem', 'created_at']), 'problem'),
                ],
            ],
            'categories' => $this->get_list_from_array(StreamsHistoryStatus::latest()->take(self::DATA_FOR_TWO_HOURS)->get('created_at'), 'created_at', true),
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
