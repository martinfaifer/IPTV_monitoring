<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\StreamResource;
use App\Http\Resources\StreamsResource;
use App\Models\Stream;
use Illuminate\Support\Facades\Auth;

class StreamController extends Controller
{
    public function index()
    {
        return new StreamsResource(Auth::user());
    }

    public function show(Stream $stream)
    {
        return new StreamResource($stream);
    }
}
