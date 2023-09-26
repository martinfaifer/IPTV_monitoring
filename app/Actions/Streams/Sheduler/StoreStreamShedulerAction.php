<?php

namespace App\Actions\Streams\Sheduler;

use App\Models\StreamSheduler;

class StoreStreamShedulerAction
{
    public function execute(object $stream, $formData): bool
    {
        try {
            if (is_null($formData->is_daily) || $formData->is_daily == false) {
                $isDaily = false;
                $startTime = $formData->start_date . " " . $formData->start_time;
                $endTime = $formData->end_date . " " . $formData->end_time;
            } else {
                $isDaily = true;
                $startTime = $formData->start_time;
                $endTime = $formData->end_time;
            }

            StreamSheduler::create([
                'stream_id' => $stream->id,
                'is_daily' => $isDaily,
                'start_time' => $startTime,
                'end_time' => $endTime
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
