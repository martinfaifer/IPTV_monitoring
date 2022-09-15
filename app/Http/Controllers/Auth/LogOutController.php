<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Users\Auth\LogOutAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogOutController extends Controller
{
    public function __invoke(Request $request, LogOutAction $logOutAction)
    {
        $logOutAction->execute($request);

        return redirect('/');
    }
}
