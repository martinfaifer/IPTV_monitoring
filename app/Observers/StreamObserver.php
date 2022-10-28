<?php

namespace App\Observers;

use App\Actions\Cache\DeleteAllStreamCacheDataAction;
use App\Events\BroadcastErrorStreamsEvent;
use App\Events\BroadcastMonitoredStreamsEvent;
use App\Events\BroadcastProblemStreamsEvent;
use App\Http\Resources\NotRunningStreamsResource;
use App\Http\Resources\ShowProblemStreamsResource;
use App\Models\Stream;
use Illuminate\Support\Facades\Cache;

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
            (new DeleteAllStreamCacheDataAction())->execute(stream: $stream);
        }

        $notRunnngStreams = new NotRunningStreamsResource((object)[]);
        if (is_array($notRunnngStreams)) {
            event(new BroadcastErrorStreamsEvent(notRunnngStreams: $notRunnngStreams));
        }

        $problemStreams = new ShowProblemStreamsResource(Stream::where('status', Stream::STATUS_MONITORING)->get());
        if (is_array($problemStreams)) {
            event(new BroadcastProblemStreamsEvent(problemStreams: $problemStreams));
        }

        event(new BroadcastMonitoredStreamsEvent());
    }

    /**
     * Handle the Stream "deleted" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function deleted(Stream $stream)
    {
        if (Cache::has('streamIsMonitoring_' . $stream->id)) {
            $processPid = Cache::get('streamIsMonitoring_' . $stream->id);
            shell_exec("kill -9 {$processPid['processPid']}");
            Cache::pull('streamIsMonitoring_' . $stream->id);
        }
        (new DeleteAllStreamCacheDataAction())->execute($stream);
        Cache::forget('streams');
        Cache::put('streams', Stream::all());

        $notRunnngStreams = new NotRunningStreamsResource((object) []);
        if (is_array($notRunnngStreams) > 0) {
            event(new BroadcastErrorStreamsEvent($notRunnngStreams));
        }

        $problemStreams = new ShowProblemStreamsResource(resource: Stream::where('status', Stream::STATUS_MONITORING)->get());
        if (is_array($problemStreams)) {
            event(new BroadcastProblemStreamsEvent($problemStreams));
        }

        event(new BroadcastMonitoredStreamsEvent());
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
