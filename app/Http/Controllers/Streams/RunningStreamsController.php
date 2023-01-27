<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\RunningStreamsPaginationResource;
use Illuminate\Support\Facades\Auth;

class RunningStreamsController extends Controller
{
    public function __invoke()
    {
        return new RunningStreamsPaginationResource(resource: Auth::user());
    }
}
