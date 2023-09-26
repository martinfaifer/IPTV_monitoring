<?php

namespace App\Actions\Streams\Sheduler;

use App\Models\StreamSheduler;

class DeleteStreamShedulerAction
{
    public function execute(object $streamSheduler): bool
    {
        $streamSheduler->delete();
        return true;
    }
}
