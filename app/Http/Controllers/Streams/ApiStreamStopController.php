<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Streams\StopStreamAction;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class ApiStreamStopController extends Controller
{
    public function __invoke(Stream $stream, StopStreamAction $stopStreamAction)
    {
        return $stopStreamAction->execute(stream: $stream);
    }
}
