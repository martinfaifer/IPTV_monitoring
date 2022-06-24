<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class StreamSettingsInformtionMozaikaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $output[] = [
            'invalidSync' => is_null(Cache::get('showStreamInvalidSync_'.$this->id)) ? true : false,
            'transportErrors' => is_null(Cache::get('showStreamTransportErrors_'.$this->id)) ? true : false,
            'audioAccess' => is_null(Cache::get('showStreamAudioAccess_'.$this->id)) ? true : false,
            'videoAccess' => is_null(Cache::get('showStreamVideoAccess_'.$this->id)) ? true : false,
            'audioVideoOutOfSync' => is_null(Cache::get('showStreamAudioVideoOutOfSync_'.$this->id)) ? true : false,
            'discontinuites' => is_null(Cache::get('showStreamDiscontinuity_'.$this->id)) ? true : false,
        ];
    }
}
