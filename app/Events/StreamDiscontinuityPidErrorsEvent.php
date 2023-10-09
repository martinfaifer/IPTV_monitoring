<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class StreamDiscontinuityPidErrorsEvent
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

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

    public function handle()
    {
        //
    }

    // public function broadcastOn()
    // {
    //     return new Channel($this->channel);
    // }

    // public function broadcastWith()
    // {
    //     return [
    //         $this->dicontinuity,
    //     ];
    // }
}
