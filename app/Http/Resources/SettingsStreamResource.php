<?php

namespace App\Http\Resources;

use App\Models\Stream;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingsStreamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $streams = Stream::get();
        if ($streams->isEmpty()) {
            return [];
        }

        foreach ($streams as $stream) {
            $output['streams'][] = [
                'id' => $stream->id,
                'nazev' => $stream->nazev,
                'stream_url' => $stream->stream_url,
                'status' => $stream->status,
                'monitored_at' => $stream->monitored_at?->diffForHumans(),
                'image' => config('app.url') . '/streams/image/' . $stream->id . '?' . rand(),
                'check_pts' => $stream->check_pts,
                'play_video' => $stream->play_video,
            ];
        }

        $output['stats'] = [
            'sum' => Stream::count(),
            'monitored' => Stream::isMonitoring()->count(),
            'crashed' => Stream::where('status', Stream::STATUS_CAN_NOT_START)->count(),
            'stopped' => Stream::where('status', Stream::STATUS_STOPPED)->count(),
            'check_pts' => Stream::checkPts()->count(),
            'play_video' => Stream::playVideo()->count()
        ];
        return $output;
    }
}
