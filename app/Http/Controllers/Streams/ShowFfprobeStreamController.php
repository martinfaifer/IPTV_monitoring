<?php

namespace App\Http\Controllers\Streams;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class ShowFfprobeStreamController extends Controller
{
    public function __invoke(Stream $stream)
    {
        return Cache::get($stream->id . "_ffprobe");
    }
}
