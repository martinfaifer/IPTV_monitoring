<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\ShowCustomStreamsResource;

class CustomStreamsController extends Controller
{
    public function __invoke()
    {
        return new ShowCustomStreamsResource(resource: []);
    }
}
