<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\StreamResource;
use App\Models\Stream;

class StreamController extends Controller
{
    public function index()
    {
        //
    }

    public function show(Stream $stream)
    {
        return new StreamResource($stream);
    }
}
