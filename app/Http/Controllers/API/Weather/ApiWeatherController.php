<?php

namespace App\Http\Controllers\API\Weather;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class ApiWeatherController extends Controller
{
    public function __invoke()
    {
        return Cache::get('weather');
    }
}
