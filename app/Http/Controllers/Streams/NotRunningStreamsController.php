<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotRunningStreamsResource;
use Illuminate\Support\Facades\Auth;

class NotRunningStreamsController extends Controller
{
    public function __invoke()
    {
        return new NotRunningStreamsResource(resource: Auth::user());
    }
}
