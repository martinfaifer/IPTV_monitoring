<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Users\Auth\LogOutAction;

class LogOutController extends Controller
{
    public function __invoke(Request $request, LogOutAction $logOutAction)
    {
        $logOutAction->execute($request);

        return redirect('/');
    }
}
