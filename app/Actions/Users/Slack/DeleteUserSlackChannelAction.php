<?php

namespace App\Actions\Users\Slack;

use App\Models\UserSlackChannel;
use Illuminate\Support\Facades\Auth;

class DeleteUserSlackChannelAction
{

    public function execute(object $slackChannel): bool
    {
        try {

            $userSlackChannel = UserSlackChannel::where('slack_channel_id', $slackChannel->id)->first();

            if ($userSlackChannel->user_id != Auth::user()->id) {
                return false;
            }

            $slackChannel->delete();
            $userSlackChannel->delete();

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
