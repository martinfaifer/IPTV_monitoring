<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\ShowVideoPidResource;
use App\Models\Stream;

class ShowVideoStreamPidsController extends Controller
{
    public function __invoke(Stream $stream)
    {
        return new ShowVideoPidResource($stream);
    }
}
