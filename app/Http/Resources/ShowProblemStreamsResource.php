<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class ShowProblemStreamsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $output = [];
        foreach ($this as $streams) {
            foreach ($streams as $stream) {
                if (is_null(Cache::get('showStreamInvalidSync_'.$stream->id))) {
                    if (Cache::has('streamInvalidSync_'.$stream->id)) {
                        $output[$stream->id]['errors'][$stream->id]['invalidSync'] = Cache::get('streamInvalidSync_'.$stream->id);
                    }
                }

                if (is_null('showStreamTransportErrors_'.$stream->id)) {
                    if (Cache::has('streamTransportErrors_'.$stream->id)) {
                        $output[$stream->id]['errors']['transportErrors'] = Cache::get('streamTransportErrors_'.$stream->id);
                    }
                }

                if (is_null(Cache::get('showStreamAudioAccess_'.$stream->id))) {
                    if (Cache::has('streamAudioAccess_'.$stream->id)) {
                        $output[$stream->id]['errors']['audioAccess'] = Cache::get('streamAudioAccess_'.$stream->id);
                    }
                }

                if (Cache::has('streamAudioBitrate_'.$stream->id)) {
                    $output[$stream->id]['errors']['audioBitrate'] = Cache::get('streamAudioBitrate_'.$stream->id);
                }

                if (is_null(Cache::get('showStreamVideoAccess_'.$stream->id))) {
                    if (Cache::has('streamVideoAccess_'.$stream->id)) {
                        $output[$stream->id]['errors']['videoAccess'] = Cache::get('streamVideoAccess_'.$stream->id);
                    }
                }

                if (Cache::has('streamVideoBitrate_'.$stream->id)) {
                    $output[$stream->id]['errors']['videoBitrate'] = Cache::get('streamVideoBitrate_'.$stream->id);
                }

                if (is_null(Cache::get('showStreamAudioVideoOutOfSync_'.$stream->id))) {
                    if (Cache::has('streanAudioVideoOutOfSync_'.$stream->id)) {
                        $output[$stream->id]['errors']['audioVideoOutOfSync'] = Cache::get('streanAudioVideoOutOfSync_'.$stream->id);
                    }
                }

                if (array_key_exists($stream->id, $output)) {
                    $output[$stream->id]['stream'] = $stream;
                    $output[$stream->id]['image'] = config('app.url').'/streams/image/'.$stream['id'].'?'.rand();
                }
            }
        }

        return $output;
    }
}
