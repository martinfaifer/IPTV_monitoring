<?php

namespace App\Actions\Streams;

use Illuminate\Support\Facades\Cache;
use App\Actions\Cache\RemoveItemsFromCache;

class UpdateStreamSettingsInformationMozaikaAction
{
    public function execute(object $stream, $formData): void
    {
        // true = odebrání z cache
        // false = zalození do cache
        if ($formData->invalidSync == true) {
            (new RemoveItemsFromCache())->execute('showStreamInvalidSync_' . $stream->id);
        } else {
            Cache::put('showStreamInvalidSync_' . $stream->id, []);
        }

        if ($formData->transportErrors == true) {
            (new RemoveItemsFromCache())->execute('showStreamTransportErrors_' . $stream->id);
        } else {
            Cache::put('showStreamTransportErrors_' . $stream->id, []);
        }

        if ($formData->audioAccess == true) {
            (new RemoveItemsFromCache())->execute('showStreamAudioAccess_' . $stream->id);
        } else {
            Cache::put('showStreamAudioAccess_' . $stream->id, []);
        }

        if ($formData->videoAccess == true) {
            (new RemoveItemsFromCache())->execute('showStreamVideoAccess_' . $stream->id);
        } else {
            Cache::put('showStreamVideoAccess_' . $stream->id, []);
        }

        if ($formData->audioVideoOutOfSync == true) {
            (new RemoveItemsFromCache())->execute('showStreamAudioVideoOutOfSync_' . $stream->id);
        } else {
            Cache::put('showStreamAudioVideoOutOfSync_' . $stream->id, []);
        }

        if ($formData->discontinuites == true) {
            (new RemoveItemsFromCache())->execute('showStreamDiscontinuity_' . $stream->id);
        } else {
            Cache::put('showStreamDiscontinuity_' . $stream->id, []);
        }
    }
}
