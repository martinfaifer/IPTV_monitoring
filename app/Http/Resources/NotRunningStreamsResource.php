<?php

namespace App\Http\Resources;

use App\Models\Stream;
use Illuminate\Http\Resources\Json\JsonResource;

class NotRunningStreamsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  Stream::where('status', 'can_not_start')->get();
    }
}
