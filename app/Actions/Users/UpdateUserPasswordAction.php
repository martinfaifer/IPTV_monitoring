<?php

namespace App\Actions\Users;

class UpdateUserPasswordAction
{
    public function execute(object $user, $formData)
    {
        try {
            $user->update([
                'password' => bcrypt($formData->password)
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
