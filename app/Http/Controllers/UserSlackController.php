<?php

namespace App\Http\Controllers;

use App\Models\SlackChannel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreUserSlackRequest;
use App\Http\Resources\ShowUserSlackResource;
use App\Actions\Users\Slack\StoreUserSlackChannelAction;
use App\Actions\Users\Slack\DeleteUserSlackChannelAction;

class UserSlackController extends Controller
{
    public function index()
    {
        //
    }

    public function show()
    {
        return new ShowUserSlackResource(Auth::user());
    }

    public function store(StoreUserSlackRequest $request, StoreUserSlackChannelAction $storeUserSlackChannelAction)
    {
        return $storeUserSlackChannelAction->execute($request) == true
            ? $this->success_response("Uloženo")
            : $this->error_response();
    }

    public function destroy(SlackChannel $slackChannel, DeleteUserSlackChannelAction $deleteUserSlackChannelAction)
    {
        return $deleteUserSlackChannelAction->execute($slackChannel) == true
            ? $this->success_response("Odebráno")
            : $this->error_response();
    }
}
