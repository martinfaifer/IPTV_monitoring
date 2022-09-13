<?php
namespace App\Actions\Users\Roles;

use App\Models\UserRole;

class GetUserRolesAction
{
    public function execute()
    {
        return UserRole::get();
    }
}
