<?php

namespace App\Actions\Users;

class DeleteUserAction
{
    public function execute(object $user)
    {
        try {
            $user->delete();
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
