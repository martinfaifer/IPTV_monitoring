<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BroadcastStreamImageEvent implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public $stream;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(object $stream)
    {
        $this->stream = $stream;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('StreamImage'.$this->stream->id);
    }

    public function broadcastWith()
    {
        return [config('app.url').'/streams/image/'.$this->stream->id.'?'.rand()];
    }
}
