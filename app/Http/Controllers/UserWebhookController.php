<?php

namespace App\Http\Controllers;

use App\Actions\Users\Webhook\GetUserWebhookAction;

class UserWebhookController extends Controller
{
    public function index(GetUserWebhookAction $getUserWebhookAction)
    {
        return $getUserWebhookAction->execute();
    }
}
