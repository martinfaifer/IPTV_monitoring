<?php

namespace App\Http\Resources;

use App\Models\UserSlackChannel;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowUserSlackResource extends JsonResource
{

    public array $result = [];

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        UserSlackChannel::where('user_id', $this->id)->with('channel')->each(function ($channel) {
            $this->result[] = $channel->channel;
        });

        return $this->result;
    }
}
