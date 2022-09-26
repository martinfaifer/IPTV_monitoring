<?php

namespace App\Http\Controllers\Streams;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Streams\GetStreamVideoImageAction;

class ApiStreamImageController extends Controller
{
    public function __invoke(Stream $stream, GetStreamVideoImageAction $getStreamVideoImageAction)
    {
        return $getStreamVideoImageAction->execute($stream);
    }
}
