<?php

namespace App\Actions\Notification;

use App\Models\Notification;

class StoreNotificationAction
{
    public function execute(object $formData, object $user): mixed
    {
        try {
            return Notification::create([
                'email' => $formData->email,
                'user_id' => $user->id,
            ]);
        } catch (\Throwable $th) {
            return false;
        }
    }
}
