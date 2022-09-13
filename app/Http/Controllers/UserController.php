<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Users\GetUsersAction;
use App\Actions\Users\StoreUserAction;
use App\Actions\Users\UpdateUserAction;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function index(GetUsersAction $getUsersAction)
    {
        return $getUsersAction->execution();
    }

    public function show()
    {
        return Auth::user();
    }

    public function store(StoreUserRequest $request, StoreUserAction $storeUserAction)
    {
        return $storeUserAction->execute($request) == true
            ? $this->success_response("Vytvořeno")
            : $this->error_response();
    }

    public function update(UpdateUserRequest $request, User $user, UpdateUserAction $updateUserAction)
    {
        return $updateUserAction->execute($user, $request) == true
            ? $this->success_response("Upraveno")
            : $this->error_response();
    }
}
