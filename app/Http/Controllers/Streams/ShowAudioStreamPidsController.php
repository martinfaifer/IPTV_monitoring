<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\ShowAudioPidResource;
use App\Models\Stream;

class ShowAudioStreamPidsController extends Controller
{
    public function __invoke(Stream $stream)
    {
        return new ShowAudioPidResource(resource: $stream);
    }
}
