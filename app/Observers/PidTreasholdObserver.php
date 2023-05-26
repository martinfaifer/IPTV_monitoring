<?php

namespace App\Observers;

use App\Models\PidTreashold;
use Illuminate\Support\Facades\Cache;

class PidTreasholdObserver
{
    public function created(PidTreashold $pidTreashold)
    {
        Cache::put('pidTreashold', $pidTreashold);
    }

    public function updated(PidTreashold $pidTreashold)
    {
        Cache::pull('pidTreashold');
        Cache::put('pidTreashold', $pidTreashold);
    }
}
