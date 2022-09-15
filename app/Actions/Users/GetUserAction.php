<?php

namespace App\Actions\Users;

use App\Models\Stream;

class GetUserAction
{
    public function execute(object $user)
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->userRole->role_name,
            'mozaika' => $user->mozaika,
            'pagination' => $user->pagination,
            'customData' => Stream::find(json_decode($user->customData, true)),
            'created_at' => $user->created_at,
        ];
    }
}
