<?php

namespace App\Http\Controllers\API;

use App\Actions\Streams\API\ShowStreamInformationAction;
use App\Models\Stream;
use App\Http\Controllers\Controller;
use App\Actions\Streams\StoreStreamAction;
use App\Actions\Streams\DeleteStreamAction;
use App\Http\Resources\ShowAudioPidResource;
use App\Http\Resources\ShowVideoPidResource;
use App\Http\Resources\ShowServicePidResource;
use App\Http\Requests\Api\StreamShowApiRequest;
use App\Http\Requests\Api\StreamStoreApiRequest;
use App\Actions\Streams\GetStreamVideoImageAction;
use App\Actions\Streams\ProblemPids\ShowProblemPidsAction;

class ApiStreamController extends Controller
{
    public function show(Stream $stream)
    {
        return (new ShowStreamInformationAction())->execute($stream->id);
    }

    public function store(StreamStoreApiRequest $request, StoreStreamAction $storeStreamAction)
    {
        info("REQUEST", [
            'formdata'  => $request->nazev . " / " . $request->stream_url,
        ]);
        return $storeStreamAction->execute(formData: $request);
    }

    public function destroy(Stream $stream, DeleteStreamAction $deleteStreamAction)
    {
        return $deleteStreamAction->execute(stream: $stream) == true
            ? $this->success_response('Odebráno')
            : $this->error_response();
    }
}
