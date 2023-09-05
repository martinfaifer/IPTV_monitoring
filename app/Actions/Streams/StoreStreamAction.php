<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use Illuminate\Support\Facades\Log;

class StoreStreamAction
{
    public function execute($formData)
    {

        $pts = false;

        if (!is_null($formData->check_pts)) {
            $pts = $formData->check_pts;
        }

        $stream = Stream::create([
            'nazev' => $formData->nazev,
            'stream_url' => $formData->stream_url,
            'check_pts' => $pts
        ]);

        return $stream;
    }
}
