<?php

namespace App\Http\Controllers;

use App\Actions\Users\Roles\GetUserRolesAction;

class UserRoleController extends Controller
{
    public function __invoke(GetUserRolesAction $getUserRolesAction)
    {
        return $getUserRolesAction->execute();
    }
}
