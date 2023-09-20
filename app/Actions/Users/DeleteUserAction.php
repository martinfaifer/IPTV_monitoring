<?php

namespace App\Actions\Users;

use App\Models\Notification;

class DeleteUserAction
{
    public function execute(object $user)
    {
        try {
            Notification::where('user_id', $user->id)->delete();
            $user->delete();

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
