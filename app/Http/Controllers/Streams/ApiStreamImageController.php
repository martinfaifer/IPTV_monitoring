<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Streams\GetStreamVideoImageAction;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class ApiStreamImageController extends Controller
{
    public function __invoke(Stream $stream, GetStreamVideoImageAction $getStreamVideoImageAction)
    {
        return $getStreamVideoImageAction->execute($stream);
    }
}
