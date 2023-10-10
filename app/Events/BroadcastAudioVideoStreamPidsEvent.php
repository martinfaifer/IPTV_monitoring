<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
// use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
// use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;

class BroadcastAudioVideoStreamPidsEvent implements ShouldBroadcastNow
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(public object $stream, public $videoPids, public $audioPids)
    {
        $this->stream = $stream;
        $this->videoPids = $videoPids;
        $this->audioPids = $audioPids;
    }

    public function broadcastOn()
    {
        return new Channel('StreamAudioVideoPids' . $this->stream->id);
    }

    public function broadcastWith()
    {
        return [
            'videoPids' => $this->videoPids,
            'videoFfmpegPids' => Cache::get('streamFfProbeVideoPid_' . $this->stream->id),
            'audioPids' => $this->audioPids,
            'audioFfmpegPids' => Cache::get('streamFfProbeAudioPid_' . $this->stream->id),
        ];
    }
}
