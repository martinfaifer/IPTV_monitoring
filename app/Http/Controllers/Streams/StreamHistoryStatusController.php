<?php

namespace App\Http\Controllers\Streams;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShowStreamHistoryResource;
use App\Models\Stream;

class StreamHistoryStatusController extends Controller
{
    public function __invoke(Stream $stream): ShowStreamHistoryResource
    {
        return new ShowStreamHistoryResource($stream);
    }
}
