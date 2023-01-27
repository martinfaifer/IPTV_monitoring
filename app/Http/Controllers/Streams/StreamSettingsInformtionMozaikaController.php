<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Streams\UpdateStreamSettingsInformationMozaikaAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateStreamSettingsInformationMozaikaRequest;
use App\Http\Resources\StreamSettingsInformtionMozaikaResource;
use App\Models\Stream;

class StreamSettingsInformtionMozaikaController extends Controller
{
    public function show(Stream $stream)
    {
        return new StreamSettingsInformtionMozaikaResource(resource: $stream);
    }

    public function update(UpdateStreamSettingsInformationMozaikaRequest $request, Stream $stream, UpdateStreamSettingsInformationMozaikaAction $updateStreamSettingsInformationMozaikaAction)
    {
        $updateStreamSettingsInformationMozaikaAction->execute(stream: $stream, formData: $request);

        return $this->success_response(message: 'Upraveno');
    }
}
