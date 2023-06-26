<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use Illuminate\Support\Facades\Log;

class StoreStreamAction
{
    public function execute($formData)
    {

        $stream = Stream::create([
            'nazev' => $formData->nazev,
            'stream_url' => $formData->stream_url,
        ]);

        return $stream;
    }
}
