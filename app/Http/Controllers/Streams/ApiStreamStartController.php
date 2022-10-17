<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Streams\StartStreamAction;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class ApiStreamStartController extends Controller
{
    public function __invoke(Stream $stream, StartStreamAction $startStreamAction)
    {
        return $startStreamAction->execute($stream);
    }
}
