<?php

namespace App\Traits\Charts;

trait GetListFromArrayTrait
{
    public function get_list_from_array($array, string $key, bool $isDate = false)
    {
        $collection = $array->sortBy('created_at');
        $collection->values()->all();
        $result = [];
        if ($isDate == true) {
            foreach ($collection as $val) {
                $result[] = $val[$key];
            }

            return $result;
        }

        foreach ($collection as $val) {
            $result[] = $val[$key];
        }

        return $result;
    }
}
