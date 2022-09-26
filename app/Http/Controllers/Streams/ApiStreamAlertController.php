<?php

namespace App\Http\Controllers\Streams;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\NotRunningStreamsResource;

class ApiStreamAlertController extends Controller
{
    public function __invoke()
    {
        return new NotRunningStreamsResource(Auth::user());
    }
}
