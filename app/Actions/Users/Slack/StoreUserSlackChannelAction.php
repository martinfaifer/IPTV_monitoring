<?php

namespace App\Actions\Users\Slack;

use App\Models\SlackChannel;
use App\Models\UserSlackChannel;
use Illuminate\Support\Facades\Auth;

class StoreUserSlackChannelAction
{

    public function execute(object $formData): bool
    {
        try {
            // Store to SlackChannel
            $storedChannel = SlackChannel::create([
                'popis' => $formData->popis,
                'webhook' => $formData->webhook
            ]);

            // store to UserSlackChannels
            UserSlackChannel::create([
                'user_id' => Auth::user()->id,
                'slack_channel_id' => $storedChannel->id
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
