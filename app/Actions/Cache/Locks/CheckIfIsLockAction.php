<?php

namespace App\Actions\Cache\Locks;

use Illuminate\Support\Facades\Cache;

class CheckIfIsLockAction
{
    public function execute(object $stream): bool
    {
        if (Cache::get('lock_' . $stream->id)) {
            return true;
        }

        return false;
    }
}
