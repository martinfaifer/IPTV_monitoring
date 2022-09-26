<?php

namespace App\Actions\Streams;

use App\Models\Stream;

class StoreStreamAction
{
    public function execute($formData)
    {
        return Stream::create([
            'nazev' => $formData->nazev,
            'stream_url' => $formData->stream_url,
        ]);
    }
}
