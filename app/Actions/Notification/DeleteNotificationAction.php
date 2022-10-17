<?php

namespace App\Actions\Notification;

class DeleteNotificationAction
{
    public function execute(object $notification)
    {
        try {
            $notification->delete();

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
