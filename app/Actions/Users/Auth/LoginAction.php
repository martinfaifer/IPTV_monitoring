<?php

namespace App\Actions\Users\Auth;

use Illuminate\Support\Facades\Auth;

class LoginAction
{
    public function execute($request): bool
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            $request->session()->regenerate();

            return true;
        }

        return false;
    }
}
