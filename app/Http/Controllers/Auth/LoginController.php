<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Users\Auth\LoginAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request, LoginAction $loginAction)
    {
        return $loginAction->execute($request) == true
            ? true
            : false;
    }
}
