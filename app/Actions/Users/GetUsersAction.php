<?php
namespace App\Actions\Users;

use App\Models\User;

class GetUsersAction
{

    public array $output;

    public function execution()
    {
        $users = User::get();

        foreach($users as $user) {
            $this->output[] = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'mozaika' => $user->mozaika,
                'customData' => $user->customData,
                'pagination' => $user->pagination,
                'role' => $user->userRole->role_name
            ];
        }

        return $this->output;
    }

}
