<?php

namespace App\Http\Resources;

use App\Models\Stream;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Actions\Cache\GetStreamPidDiscontinuityAction;
use App\Http\Controllers\Traits\CountStreamErrorTrait;

class ShowCustomStreamsResource extends JsonResource
{

    use CountStreamErrorTrait;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = Auth::user();

        if (is_null($user->customData)) {
            return [];
        }

        $customMozaikaStreams = Stream::find(json_decode($user->customData, true));

        if(count($customMozaikaStreams) == 0) {
            return [];
        }

        foreach ($customMozaikaStreams as $stream) {
            $streams[] = [
                'id' => $stream['id'],
                'nazev' => $stream['nazev'],
                'status' => $stream['status'],
                'image' => config('app.url') . '/streams/image/' . $stream['id'] . '?' . rand(),
                'audio_pids_errors' => is_null(Cache::get('showStreamDiscontinuity_' . $stream['id'])) ? $this->count_errors('audio', $stream) : 0,
                'video_pids_errors' => is_null(Cache::get('showStreamDiscontinuity_' . $stream['id'])) ? $this->count_errors('video', $stream) : 0,
                'errors' => [
                    'invalidSync' => is_null(Cache::get('showStreamInvalidSync_' . $stream['id'])) ? Cache::get('streamInvalidSync_' . $stream['id']) : null,
                    'transportErrors' => is_null(Cache::get('showStreamTransportErrors_' . $stream['id'])) ? Cache::get('streamTransportErrors_' . $stream['id']) : null,
                    'audioAccess' => is_null(Cache::get('showStreamAudioAccess_' . $stream['id'])) ? Cache::get('streamAudioAccess_' . $stream['id']) : null,
                    'audioBitrate' => Cache::get('streamAudioBitrate_' . $stream['id']),
                    'videoAccess' => is_null(Cache::get('showStreamVideoAccess_' . $stream['id'])) ? Cache::get('streamVideoAccess_' . $stream['id']) : null,
                    'videoBitrate' => Cache::get('streamVideoBitrate_' . $stream['id']),
                ],
            ];
        }

        return $streams;
    }


}
