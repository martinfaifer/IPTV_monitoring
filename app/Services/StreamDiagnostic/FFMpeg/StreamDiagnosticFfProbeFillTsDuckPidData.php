<?php

namespace App\Services\StreamDiagnostic\FFMpeg;

use App\Actions\Cache\StoreItemsToCache;
use Illuminate\Support\LazyCollection;

class StreamDiagnosticFfProbeFillTsDuckPidData
{
    public function __construct(LazyCollection $ffprobeCollection, $stream)
    {
        $this->fill_ts_duck_pids($ffprobeCollection, $stream);
    }

    public function fill_ts_duck_pids(LazyCollection $ffprobeCollection, $stream)
    {
        $ffprobeCollection->each(function ($streamData) use ($stream) {
            $audioStreamsData = collect($streamData[0]['streams']);
            $filteredAudio = $audioStreamsData->where('codec_type', 'audio');
            if (! empty($filteredAudio->all())) {
                $this->fill_pids($stream, $filteredAudio->all(), 'streamFfProbeAudioPid_');
            }

            $videoStreamsData = collect($streamData[0]['streams']);
            $filteredVideo = $videoStreamsData->where('codec_type', 'video');
            if (! empty($filteredVideo->all())) {
                $this->fill_pids($stream, $filteredVideo->all(), 'streamFfProbeVideoPid_');
            }
        });
    }

    private function fill_pids(object $stream, array $pidsData, string $cacheKey): void
    {
        foreach ($pidsData as $pidData) {
            $newArray[hexdec($pidData['id'])] = $pidData;
        }

        (new StoreItemsToCache())->execute(
            $cacheKey.$stream->id,
            $newArray
        );
    }
}
