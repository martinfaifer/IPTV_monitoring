<?php

namespace App\Http\Controllers;

use App\Actions\Users\Auth\GeneratePasswordAction;
use App\Models\User;

class UserGeneratePasswordController extends Controller
{
    public function __invoke(User $user, GeneratePasswordAction $generatePasswordAction)
    {
        return $generatePasswordAction->execute($user, $sendNotification = true)
            ? $this->success_response('Nové heslo bylo odesláno')
            : $this->error_response();
    }
}
