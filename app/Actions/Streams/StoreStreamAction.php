<?php

namespace App\Actions\Streams;

use App\Models\Stream;

class StoreStreamAction
{
    public function execute($formData)
    {

        $stream = Stream::create([
            'nazev' => $formData->nazev,
            'stream_url' => $formData->stream_url,
        ]);

        try {
            info("STORE_REQ_RES", [
                'formData' => $formData,
                'response = $stream',
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }

        return $stream;
    }
}
