<?php

namespace App\Actions\Cache\Locks;

use Illuminate\Support\Facades\Cache;

class LockStreamAction
{

    public int $lockTime = 60;

    public function execute(object $stream)
    {
        Cache::put('lock_' . $stream->id, $this->lockTime);
    }
}
