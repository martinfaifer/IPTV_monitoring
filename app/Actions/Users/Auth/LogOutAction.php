<?php

namespace App\Actions\Users\Auth;

use Illuminate\Support\Facades\Auth;

class LogOutAction
{
    public function execute($request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
