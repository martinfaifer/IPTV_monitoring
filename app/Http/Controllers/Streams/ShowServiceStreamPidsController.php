<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\ShowServicePidResource;
use App\Models\Stream;

class ShowServiceStreamPidsController extends Controller
{
    public function __invoke(Stream $stream)
    {
        return new ShowServicePidResource(resource: $stream);
    }
}
