<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Resources\Json\JsonResource;

class StreamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nazev' => $this->nazev,
            'stream_url' => $this->stream_url,
            'status' => $this->status,
            'monitored_at' => $this->monitored_at?->diffForHumans(),
            'image' => '/streams/image/' . $this->id . '?' . rand(),
            'history' => $this->history,
            'check_pts' => $this->check_pts
        ];
    }
}
