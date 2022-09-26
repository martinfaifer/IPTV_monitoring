<?php

namespace App\Http\Controllers\Streams;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Streams\StartStreamAction;

class ApiStreamStartController extends Controller
{
    public function __invoke(Stream $stream, StartStreamAction $startStreamAction)
    {
        return $startStreamAction->execute($stream);
    }
}
