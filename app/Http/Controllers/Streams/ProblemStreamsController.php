<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\ShowProblemStreamsResource;
use App\Models\Stream;

class ProblemStreamsController extends Controller
{
    public function __invoke()
    {
        return new ShowProblemStreamsResource(Stream::where('status', STREAM::STATUS_MONITORING)->get());
    }
}
