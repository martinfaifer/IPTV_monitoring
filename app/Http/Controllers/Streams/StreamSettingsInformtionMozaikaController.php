<?php

namespace App\Http\Controllers\Streams;

use App\Models\Stream;
use App\Http\Controllers\Controller;
use App\Http\Resources\StreamSettingsInformtionMozaikaResource;
use App\Http\Requests\UpdateStreamSettingsInformationMozaikaRequest;
use App\Actions\Streams\UpdateStreamSettingsInformationMozaikaAction;

class StreamSettingsInformtionMozaikaController extends Controller
{
    public function show(Stream $stream)
    {
        return new StreamSettingsInformtionMozaikaResource($stream);
    }

    public function update(UpdateStreamSettingsInformationMozaikaRequest $request, Stream $stream, UpdateStreamSettingsInformationMozaikaAction $updateStreamSettingsInformationMozaikaAction)
    {
        $updateStreamSettingsInformationMozaikaAction->execute($stream, $request);
        return $this->success_response("Upraveno");
    }
}
