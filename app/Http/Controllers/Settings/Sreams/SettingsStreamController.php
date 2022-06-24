<?php

namespace App\Http\Controllers\Settings\Sreams;

use App\Actions\Streams\DeleteStreamAction;
use App\Actions\Streams\StoreStreamAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStreamRequest;
use App\Http\Resources\SettingsStreamResource;
use App\Models\Stream;
use Illuminate\Support\Facades\Auth;

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

    public function destroy(Stream $stream, DeleteStreamAction $deleteStreamAction)
    {
        return $deleteStreamAction->execute($stream)
            ? $this->success_response('Odebráno')
            : $this->error_response();
    }
}
