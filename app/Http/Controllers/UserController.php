<?php

namespace App\Http\Controllers;

use App\Actions\Users\DeleteUserAction;
use App\Actions\Users\GetUserAction;
use App\Actions\Users\GetUsersAction;
use App\Actions\Users\StoreUserAction;
use App\Actions\Users\UpdateUserAction;
use App\Actions\Users\UpdateUserPaginationAction;
use App\Actions\Users\UpdateUserPasswordAction;
use App\Actions\Users\UpdateUserStaticMozaikaAction;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserPaginationRequest;
use App\Http\Requests\UpdateUserPasswordRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UpdateUserStaticMozaikaRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(GetUsersAction $getUsersAction)
    {
        return $getUsersAction->execution();
    }

    public function show(GetUserAction $getUserAction)
    {
        return $getUserAction->execute(Auth::user());
    }

    public function store(StoreUserRequest $request, StoreUserAction $storeUserAction)
    {
        return $storeUserAction->execute($request) == true
            ? $this->success_response('Vytvořeno')
            : $this->error_response();
    }

    public function update(UpdateUserRequest $request, User $user, UpdateUserAction $updateUserAction)
    {
        return $updateUserAction->execute($user, $request) == true
            ? $this->success_response('Upraveno')
            : $this->error_response();
    }

    public function update_pagination(UpdateUserPaginationRequest $request, UpdateUserPaginationAction $updateUserPaginationAction)
    {
        return $updateUserPaginationAction->execute(Auth::user(), $request)
            ? $this->success_response('Upraveno')
            : $this->error_response();
    }

    public function update_static_mozaika(UpdateUserStaticMozaikaRequest $request, UpdateUserStaticMozaikaAction $updateUserStaticMozaikaAction)
    {
        return $updateUserStaticMozaikaAction->execute(Auth::user(), $request)
            ? $this->success_response('Upraveno')
            : $this->error_response();
    }

    public function update_password(UpdateUserPasswordRequest $request, UpdateUserPasswordAction $updateUserPasswordAction)
    {
        return $updateUserPasswordAction->execute(Auth::user(), $request)
            ? $this->success_response('Upraveno')
            : $this->error_response();
    }

    public function destroy(User $user)
    {
        return (new DeleteUserAction())->execute($user)
            ? $this->success_response('Odebráno')
            : $this->error_response();
    }
}
