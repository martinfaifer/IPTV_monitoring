<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
use App\Events\BroadcastErrorStreamsEvent;
use App\Actions\Cache\RemoveItemsFromCache;
use App\Events\BroadcastProblemStreamsEvent;
use App\Events\BroadcastMonitoredStreamsEvent;
use App\Http\Resources\NotRunningStreamsResource;
use App\Http\Resources\ShowProblemStreamsResource;

class UpdateStreamSettingsInformationMozaikaAction
{
    public function execute(object $stream, $formData): void
    {
        // true = odebrání z cache
        // false = zalození do cache
        if ($formData->invalidSync == true) {
            (new RemoveItemsFromCache())->execute('showStreamInvalidSync_'.$stream->id);
        } else {
            Cache::put('showStreamInvalidSync_'.$stream->id, []);
        }

        if ($formData->transportErrors == true) {
            (new RemoveItemsFromCache())->execute('showStreamTransportErrors_'.$stream->id);
        } else {
            Cache::put('showStreamTransportErrors_'.$stream->id, []);
        }

        if ($formData->audioAccess == true) {
            (new RemoveItemsFromCache())->execute('showStreamAudioAccess_'.$stream->id);
        } else {
            Cache::put('showStreamAudioAccess_'.$stream->id, []);
        }

        if ($formData->videoAccess == true) {
            (new RemoveItemsFromCache())->execute('showStreamVideoAccess_'.$stream->id);
        } else {
            Cache::put('showStreamVideoAccess_'.$stream->id, []);
        }

        if ($formData->audioVideoOutOfSync == true) {
            (new RemoveItemsFromCache())->execute('showStreamAudioVideoOutOfSync_'.$stream->id);
        } else {
            Cache::put('showStreamAudioVideoOutOfSync_'.$stream->id, []);
        }

        if ($formData->discontinuites == true) {
            (new RemoveItemsFromCache())->execute('showStreamDiscontinuity_'.$stream->id);
        } else {
            Cache::put('showStreamDiscontinuity_'.$stream->id, []);
        }

        $notRunnngStreams = new NotRunningStreamsResource((object) []);
        if (is_array($notRunnngStreams) > 0) {
            BroadcastErrorStreamsEvent::dispatch($notRunnngStreams);
        }

        $problemStreams = new ShowProblemStreamsResource(Stream::where('status', Stream::STATUS_MONITORING)->get());
        if (is_array($problemStreams)) {
            BroadcastProblemStreamsEvent::dispatch($problemStreams);
        }

        BroadcastMonitoredStreamsEvent::dispatch();
    }
}
