<?php

namespace App\Interfaces;

interface StreamBroadcastInterface
{
    public function stream_broadcast(object $stream, array $broadcastdata): void;
}
