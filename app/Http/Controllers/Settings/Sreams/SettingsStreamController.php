<?php

namespace App\Http\Controllers\Settings\Sreams;

use App\Models\Stream;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreStreamRequest;
use App\Actions\Streams\StoreStreamAction;
use App\Http\Requests\UpdateStreamRequest;
use App\Actions\Streams\DeleteStreamAction;
use App\Actions\Streams\UpdateStreamAction;
use App\Http\Resources\SettingsStreamResource;

class SettingsStreamController extends Controller
{
    public function index()
    {
        return new SettingsStreamResource(Auth::user());
    }

    public function store(StoreStreamRequest $request, StoreStreamAction $storeStreamAction)
    {
        $storeStreamAction->execute($request);

        return $this->success_response('Vytvořeno');
    }

    public function update(UpdateStreamRequest $request, Stream $stream, UpdateStreamAction $updateStreamAction)
    {
        return $updateStreamAction->execute($stream, $request) == true
            ? $this->success_response('Upraveno')
            : $this->error_response();
    }

    public function destroy(Stream $stream, DeleteStreamAction $deleteStreamAction)
    {
        return $deleteStreamAction->execute($stream)
            ? $this->success_response('Odebráno')
            : $this->error_response();
    }
}
