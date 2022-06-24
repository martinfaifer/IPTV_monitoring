<?php

namespace App\Actions\Search;

use App\Models\Stream;

class SearchAction
{
    public $result = [];

    public function execute($searcheableData)
    {
        if (empty($searcheableData->search)) {
            return $this->result;
        }

        if (is_null($searcheableData->search)) {
            return $this->result;
        }

        $streamsResult = Stream::where('nazev', 'like', '%'.$searcheableData->search.'%')->get()->toArray();
        if (! empty($streamsResult)) {
            foreach ($streamsResult as $streamResult) {
                $this->result[] = [
                    'uuid' => uniqid(),
                    'id' => $streamResult['id'],
                    'nazev' => $streamResult['nazev'],
                    'url' => "/stream/{$streamResult['id']}",
                ];
            }
        }

        return $this->result;
    }
}
