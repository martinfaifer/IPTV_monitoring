<?php

namespace App\Http\Resources;

use App\Http\Controllers\Traits\CountStreamErrorTrait;
use App\Models\Stream;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class RunningStreamsPaginationResource extends JsonResource
{
    use CountStreamErrorTrait;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $user
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($user)
    {
        $paginatedStreams = Stream::where('status', Stream::STATUS_MONITORING)->paginate(Auth::user()->pagination);

        $paginatedStreams = $paginatedStreams->toArray();
        foreach ($paginatedStreams['data'] as &$stream) {
            $streams[] = [
                'id' => $stream['id'],
                'nazev' => $stream['nazev'],
                'status' => $stream['status'],
                'image' => '/streams/image/'.$stream['id'].'?'.rand(),
                'audio_pids_errors' => is_null(Cache::get('showStreamDiscontinuity_'.$stream['id'])) ? $this->count_errors('audio', $stream) : 0,
                'video_pids_errors' => is_null(Cache::get('showStreamDiscontinuity_'.$stream['id'])) ? $this->count_errors('video', $stream) : 0,
                'errors' => [
                    'invalidSync' => is_null(Cache::get('showStreamInvalidSync_'.$stream['id'])) ? Cache::get('streamInvalidSync_'.$stream['id']) : null,
                    'transportErrors' => is_null(Cache::get('showStreamTransportErrors_'.$stream['id'])) ? Cache::get('streamTransportErrors_'.$stream['id']) : null,
                    'audioAccess' => is_null(Cache::get('showStreamAudioAccess_'.$stream['id'])) ? Cache::get('streamAudioAccess_'.$stream['id']) : null,
                    'audioBitrate' => Cache::get('streamAudioBitrate_'.$stream['id']),
                    'videoAccess' => is_null(Cache::get('showStreamVideoAccess_'.$stream['id'])) ? Cache::get('streamVideoAccess_'.$stream['id']) : null,
                    'videoBitrate' => Cache::get('streamVideoBitrate_'.$stream['id']),
                ],
            ];
        }
        if (isset($streams)) {
            $paginatedStreams['data'] = $streams;
        }

        return $paginatedStreams;
    }
}
