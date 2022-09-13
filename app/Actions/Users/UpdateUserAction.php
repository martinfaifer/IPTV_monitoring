<?php

namespace App\Actions\Users;

class UpdateUserAction
{
    public function execute(object $user, object $formData)
    {
        try {
            $user->update([
                'name' => $formData->name,
                'role_id' => !is_int($formData->role) ? $user->role_id : $formData->role
            ]);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
