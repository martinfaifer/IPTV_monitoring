<?php

namespace App\Http\Controllers\API;

use App\Actions\Streams\DeleteStreamAction;
use App\Actions\Streams\GetStreamVideoImageAction;
use App\Actions\Streams\StoreStreamAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StreamShowApiRequest;
use App\Http\Requests\Api\StreamStoreApiRequest;
use App\Http\Resources\ShowAudioPidResource;
use App\Http\Resources\ShowServicePidResource;
use App\Http\Resources\ShowVideoPidResource;
use App\Models\Stream;

class ApiStreamController extends Controller
{
    public function show(StreamShowApiRequest $request)
    {
        $stream = Stream::find($request->streamId);

        return [
            'status' => 'success',
            'streamData' => [
                'img' => config('app.url').(new GetStreamVideoImageAction())->execute($stream, true),
                'name' => $stream->nazev,
                'streamStatus' => $stream->status,
                'streamId' => $stream->id,
                'monitored_at' => $stream->monitored_at,
                'history' => [],
                'streamTS' => new ShowServicePidResource($stream),
                'audioPids' => new ShowAudioPidResource($stream),
                'videpPids' => new ShowVideoPidResource($stream),
                'AVbitrate' => [],
            ],
        ];
    }

    public function store(StreamStoreApiRequest $request, StoreStreamAction $storeStreamAction)
    {
        return $storeStreamAction->execute($request);
    }

    public function destroy(Stream $stream, DeleteStreamAction $deleteStreamAction)
    {
        return $deleteStreamAction->execute($stream);
    }
}
