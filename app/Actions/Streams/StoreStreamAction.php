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

        // try {
            Log::debug("STORE_REQ_RES", [
                'formData' => $formData->nazev ." / " . $formData->stream_url,
                'response' => (array) $stream ?? [],
            ]);
        // } catch (\Throwable $th) {
        //     //throw $th;
        // }

        return $stream;
    }
}
