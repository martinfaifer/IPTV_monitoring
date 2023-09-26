<?php

namespace App\Http\Controllers;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Models\StreamSheduler;
use App\Http\Resources\ShowStreamSheduleResource;
use App\Actions\Streams\Sheduler\StoreStreamShedulerAction;
use App\Actions\Streams\Sheduler\DeleteStreamShedulerAction;
use App\Http\Requests\StoreStreamSheduleRequest;

class StreamShedulerController extends Controller
{
    public function show(Stream $stream): ShowStreamSheduleResource
    {
        return new ShowStreamSheduleResource($stream);
    }

    public function store(Stream $stream, StoreStreamSheduleRequest $request, StoreStreamShedulerAction $storeStreamShedulerAction)
    {
        return $storeStreamShedulerAction->execute($stream, $request) == true
            ? $this->success_response("Událost přidána")
            : $this->error_response();
    }

    public function destroy(StreamSheduler $streamSheduler, DeleteStreamShedulerAction $deleteStreamShedulerAction)
    {
        return $deleteStreamShedulerAction->execute($streamSheduler) == true
            ? $this->success_response("Odebráno")
            : $this->error_response();
    }
}
