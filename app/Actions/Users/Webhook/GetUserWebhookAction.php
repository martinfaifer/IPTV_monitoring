<?php

namespace App\Actions\Users\Webhook;

use App\Models\UserWebhook;
use Illuminate\Support\Facades\Auth;

class GetUserWebhookAction
{
    public function execute()
    {
        $webhooks = UserWebhook::where('user_id', Auth::user()->id)->with('webhooks.webhook_send_option')->get();
        if (count($webhooks) == 0) {
            return [];
        }

        return $webhooks;
    }
}
