<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Users\GetUsersAction;
use App\Actions\Users\StoreUserAction;
use App\Actions\Users\DeleteUserAction;
use App\Actions\Users\UpdateUserAction;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

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

    public function destroy(User $user)
    {
        return (new DeleteUserAction())->execute($user)
            ? $this->success_response("Odebráno")
            : $this->error_response();
    }
}
