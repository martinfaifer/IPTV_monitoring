<?php

namespace App\Actions\Notification;

use App\Models\Notification;

class IndexNotificationsAction
{
    public function execute()
    {
        return Notification::with('user')->get();
    }
}
