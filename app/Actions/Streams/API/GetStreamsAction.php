<?php

namespace App\Actions\Streams\API;

use App\Models\Stream;
use App\Actions\Streams\GetStreamVideoImageAction;

class GetStreamsAction
{
    public array $result;
    public function execute()
    {
        Stream::orderBy('status')->get()->each(function (Stream $stream) {
            $this->result[] = [
                'id' => $stream->id,
                'img' => config('app.url') . "/" . (new GetStreamVideoImageAction())->execute($stream, true),
                'name' => $stream->nazev,
                'stream_url' => $stream->stream_url,
                'status' => $stream->status,
                'monitored_at' => !blank($stream->monitored_at) ? $stream->monitored_at->format('d.m. Y') : null,
            ];
        });


        return [
            'status' => "success",
            'data' => $this->result,
        ];
    }
}
