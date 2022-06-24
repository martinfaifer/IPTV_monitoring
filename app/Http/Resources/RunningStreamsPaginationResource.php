<?php

namespace App\Http\Resources;

use App\Actions\Cache\GetStreamPidDiscontinuityAction;
use App\Models\Stream;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class RunningStreamsPaginationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $user
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($user)
    {
        $paginatedStreams = Stream::where('status', Stream::STATUS_MONITORING)->paginate();

        $paginatedStreams = $paginatedStreams->toArray();
        foreach ($paginatedStreams['data'] as &$stream) {
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
                    'videoAccess' => is_null(Cache::get('showStreamVideoAccess_' . $stream['id'])) ?  Cache::get('streamVideoAccess_' . $stream['id']) : null,
                    'videoBitrate' => Cache::get('streamVideoBitrate_' . $stream['id']),
                ],
            ];
        }
        if (isset($streams)) {
            $paginatedStreams['data'] = $streams;
        }

        return $paginatedStreams;
    }

    private function count_errors(string $pidType, $stream)
    {
        if ($pidType == 'audio') {
            $pids = Cache::has('streamAudioPids_' . $stream['id'])
                ? Cache::get('streamAudioPids_' . $stream['id'])
                : [];
        }

        if ($pidType == 'video') {
            $pids = Cache::has('streamVideoPids_' . $stream['id'])
                ? Cache::get('streamVideoPids_' . $stream['id'])
                : [];
        }
        $errors = 0;
        foreach ($pids as $pid) {
            $errors = $errors + (new GetStreamPidDiscontinuityAction())->execute((object) $stream, $pid['pid']);
        }

        return $errors;
    }
}
