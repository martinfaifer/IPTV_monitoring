<?php

namespace App\Http\Controllers\Streams;

use Carbon\Carbon;
use App\Models\Stream;
use App\Http\Controllers\Controller;
use App\Actions\Cache\StoreItemsToCache;
use App\Actions\Cache\RemoveItemsFromCache;
use App\Actions\Cache\GetStreamPidDiscontinuityAction;

class StreStreamPidDiscontinuityResetController extends Controller
{
    public function __invoke(Stream $stream, $pid, RemoveItemsFromCache $removeItemsFromCache, GetStreamPidDiscontinuityAction $getStreamPidDiscontinuityAction)
    {
        $removeItemsFromCache->execute(key: 'streamDiscontinuityPidErrors_' . $pid . '_' . $stream->id);
        $removeItemsFromCache->execute(key: 'streamDiscontinuityPidErrors_' . $pid . '_' . $stream->id . "_started");
        (new StoreItemsToCache())->execute(key: 'streamDiscontinuityPidErrors_' . $pid . '_' . $stream->id . "_started", value: [Carbon::now()->format('Y-m-d H:i:s')]);

        return $getStreamPidDiscontinuityAction->execute(stream: $stream, pid: $pid);
    }
}
