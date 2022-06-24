<?php

namespace App\Observers;

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
use App\Events\BroadcastErrorStreamsEvent;
use App\Events\BroadcastProblemStreamsEvent;
use App\Events\BroadcastMonitoredStreamsEvent;
use App\Actions\Cache\DeleteAllStreamCacheDataAction;

class StreamObserver
{
    /**
     * Handle the Stream "created" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function created(Stream $stream)
    {
        Cache::forget('streams');
        Cache::put('streams', Stream::all());
    }

    /**
     * Handle the Stream "updated" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function updated(Stream $stream)
    {
        Cache::forget('streams');
        Cache::put('streams', Stream::all());
        if ($stream->status == Stream::STATUS_WAITING) {
            (new DeleteAllStreamCacheDataAction())->execute($stream);
        }
        // fired Up events for mozaika
        BroadcastErrorStreamsEvent::dispatch();
        BroadcastMonitoredStreamsEvent::dispatch();
        BroadcastProblemStreamsEvent::dispatch();
    }

    /**
     * Handle the Stream "deleted" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function deleted(Stream $stream)
    {
        // kill stream monitoring process
        if (Cache::has('streamIsMonitoring_' . $stream->id)) {
            $processPid = Cache::get('streamIsMonitoring_' . $stream->id);
            shell_exec("kill -9 {$processPid['processPid']}");
            Cache::pull('streamIsMonitoring_' . $stream->id);
        }
        (new DeleteAllStreamCacheDataAction())->execute($stream);
        Cache::forget('streams');
        Cache::put('streams', Stream::all());

        BroadcastErrorStreamsEvent::dispatch();
        BroadcastMonitoredStreamsEvent::dispatch();
        BroadcastProblemStreamsEvent::dispatch();
    }

    /**
     * Handle the Stream "restored" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function restored(Stream $stream)
    {
        //
    }

    /**
     * Handle the Stream "force deleted" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function forceDeleted(Stream $stream)
    {
        //
    }
}
