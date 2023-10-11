<?php

namespace App\Observers;

use App\Models\Stream;
use App\Models\SendedStreamEmail;
use Illuminate\Support\Facades\Cache;
use App\Events\BroadcastErrorStreamsEvent;
use App\Events\BroadcastProblemStreamsEvent;
use App\Events\BroadcastMonitoredStreamsEvent;
use App\Http\Resources\NotRunningStreamsResource;
use App\Http\Resources\ShowProblemStreamsResource;
use App\Actions\Cache\DeleteAllStreamCacheDataAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

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
        Cache::put('stream_' . $stream->id, $stream);
    }

    /**
     * Handle the Stream "updated" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function updated(Stream $stream)
    {
        if ($stream->status != Stream::STATUS_CAN_NOT_START) {
            SendedStreamEmail::where('stream_id', $stream->id)->delete();
        }

        Cache::forget('stream_' . $stream->id);
        if ($stream->status == Stream::STATUS_WAITING) {
            (new DeleteAllStreamCacheDataAction())->execute(stream: $stream);
        }

        $notRunnngStreams = new NotRunningStreamsResource([]);
        if (is_array($notRunnngStreams)) {
            BroadcastErrorStreamsEvent::dispatch($notRunnngStreams);
        }

        $problemStreams = new ShowProblemStreamsResource(Stream::where('status', Stream::STATUS_MONITORING)->get());
        if (is_array($problemStreams)) {
            BroadcastProblemStreamsEvent::dispatch($problemStreams);
        }

        Cache::put('stream_' . $stream->id, $stream);
        BroadcastMonitoredStreamsEvent::dispatch();
    }

    /**
     * Handle the Stream "deleted" event.
     *
     * @param  \App\Models\Stream  $stream
     * @return void
     */
    public function deleted(Stream $stream)
    {
        (new KillTsDuckStreamProcessAction())->execute($stream);
        (new DeleteAllStreamCacheDataAction())->execute($stream);

        SendedStreamEmail::where('stream_id', $stream->id)->delete();

        Cache::pull($stream->id . "_" . Stream::STATUS_CAN_NOT_START);

        $notRunnngStreams = new NotRunningStreamsResource([]);
        if (is_array($notRunnngStreams) > 0) {
            BroadcastErrorStreamsEvent::dispatch($notRunnngStreams);
        }

        $problemStreams = new ShowProblemStreamsResource(resource: Stream::where('status', Stream::STATUS_MONITORING)->get());
        if (is_array($problemStreams)) {
            BroadcastProblemStreamsEvent::dispatch($problemStreams);
        }

        Cache::forget('stream_' . $stream->id);
        BroadcastMonitoredStreamsEvent::dispatch();
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
