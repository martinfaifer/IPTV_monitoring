<?php

namespace App\Actions\Users;

class UpdateUserPaginationAction
{
    public function execute(object $user, object $formData): bool
    {
        try {
            $user->update([
                'pagination' => $formData->pagination,
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
