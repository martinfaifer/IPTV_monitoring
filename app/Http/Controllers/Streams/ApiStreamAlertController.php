<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotRunningStreamsResource;
use Illuminate\Support\Facades\Auth;

class ApiStreamAlertController extends Controller
{
    public function __invoke()
    {
        return new NotRunningStreamsResource(Auth::user());
    }
}
