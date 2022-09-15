<?php

namespace App\Actions\Users;

use App\Models\User;

class StoreUserAction
{
    public function execute(object $formData)
    {
        return rescue(function () use ($formData) {
            User::create([
                'name' => $formData->name,
                'email' => $formData->email,
                'password' => $formData->password,
                'role_id' => $formData->role,
            ]);

            return true;
        }, function () {
        });
    }
}
