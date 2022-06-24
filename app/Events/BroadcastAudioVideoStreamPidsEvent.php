<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;

class BroadcastAudioVideoStreamPidsEvent implements ShouldBroadcast, ShouldQueue
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public $connection = 'redis';

    public $queue = 'ws-stream';

    public $stream;

    public $videoPids;

    public $audioPids;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(object $stream, $videoPids, $audioPids)
    {
        $this->stream = $stream;
        $this->videoPids = $videoPids;
        $this->audioPids = $audioPids;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('StreamAudioVideoPids'.$this->stream->id);
    }

    public function broadcastWith()
    {
        return [
            'videoPids' => $this->videoPids,
            'videoFfmpegPids' => Cache::get('streamFfProbeVideoPid_'.$this->stream->id),
            'audioPids' => $this->audioPids,
            'audioFfmpegPids' => Cache::get('streamFfProbeAudioPid_'.$this->stream->id),
        ];
    }
}
