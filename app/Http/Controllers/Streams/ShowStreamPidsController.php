<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Cache\GetItemsFromCache;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class ShowStreamPidsController extends Controller
{
    public $streamPidKey = 'streamPids_';

    public function __invoke(Stream $stream, GetItemsFromCache $getItemsFromCache)
    {
        return $getItemsFromCache->execute($this->streamPidKey.$stream->id);
    }
}
