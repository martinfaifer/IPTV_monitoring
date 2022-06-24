<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class StreamDiscontinuityPidErrorsEvent implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public $connection = 'redis';

    public $queue = 'ws-stream';

    public $channel;

    public $dicontinuity;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(string $channel, $dicontinuity)
    {
        $this->channel = $channel;
        $this->dicontinuity = $dicontinuity;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel($this->channel);
    }

    public function broadcastWith()
    {
        return [
            $this->dicontinuity,
        ];
    }
}
