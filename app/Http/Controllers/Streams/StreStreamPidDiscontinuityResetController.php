<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Cache\GetStreamPidDiscontinuityAction;
use App\Actions\Cache\RemoveItemsFromCache;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class StreStreamPidDiscontinuityResetController extends Controller
{
    public function __invoke(Stream $stream, $pid, RemoveItemsFromCache $removeItemsFromCache, GetStreamPidDiscontinuityAction $getStreamPidDiscontinuityAction)
    {
        $removeItemsFromCache->execute(key: 'streamDiscontinuityPidErrors_' . $pid . '_' . $stream->id);

        return $getStreamPidDiscontinuityAction->execute(stream: $stream, pid: $pid);
    }
}
