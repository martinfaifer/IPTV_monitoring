<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BroadcastErrorStreamsEvent implements ShouldBroadcastNow
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public $notRunnngStreams;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($notRunnngStreams)
    {
        $this->notRunnngStreams = $notRunnngStreams;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('ErrorStreams');
    }

    public function broadcastWith()
    {
        return [$this->notRunnngStreams];
    }
}
