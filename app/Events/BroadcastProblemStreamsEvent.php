<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BroadcastProblemStreamsEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $problemStreams;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($problemStreams)
    {
        $this->problemStreams = $problemStreams;
    }

    public function handle()
    {
        //
    }


    // public function broadcastOn()
    // {
    //     return new Channel('ProblemStreams');
    // }

    // public function broadcastWith()
    // {
    //     return [$this->problemStreams];
    // }
}
