<?php

namespace App\Http\Controllers\Streams;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Streams\StopStreamAction;

class ApiStreamStopController extends Controller
{
    public function __invoke(Stream $stream, StopStreamAction $stopStreamAction)
    {
        return $stopStreamAction->execute($stream);
    }
}
