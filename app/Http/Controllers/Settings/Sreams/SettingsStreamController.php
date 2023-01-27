<?php

namespace App\Http\Controllers\Settings\Sreams;

use App\Actions\Streams\DeleteStreamAction;
use App\Actions\Streams\StoreStreamAction;
use App\Actions\Streams\UpdateStreamAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStreamRequest;
use App\Http\Requests\UpdateStreamRequest;
use App\Http\Resources\SettingsStreamResource;
use App\Models\Stream;
use Illuminate\Support\Facades\Auth;

class SettingsStreamController extends Controller
{
    public function index()
    {
        return new SettingsStreamResource(resource: Auth::user());
    }

    public function store(StoreStreamRequest $request, StoreStreamAction $storeStreamAction)
    {
        $storeStreamAction->execute(formData: $request);

        return $this->success_response(message: 'Vytvořeno');
    }

    public function update(UpdateStreamRequest $request, Stream $stream, UpdateStreamAction $updateStreamAction)
    {
        return $updateStreamAction->execute($stream, formData: $request) == true
            ? $this->success_response(message: 'Upraveno')
            : $this->error_response();
    }

    public function destroy(Stream $stream, DeleteStreamAction $deleteStreamAction)
    {
        return $deleteStreamAction->execute(stream: $stream)
            ? $this->success_response(message: 'Odebráno')
            : $this->error_response();
    }
}
