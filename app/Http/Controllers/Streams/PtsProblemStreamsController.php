<?php

namespace App\Http\Controllers\Streams;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PtsProblemStreamsResource;

class PtsProblemStreamsController extends Controller
{
    public function __invoke()
    {
        return new PtsProblemStreamsResource([]);
    }
}
