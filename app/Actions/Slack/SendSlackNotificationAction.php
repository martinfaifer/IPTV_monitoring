<?php

namespace App\Actions\Slack;

use App\Models\SlackChannel;
use Spatie\SlackAlerts\Facades\SlackAlert;

class SendSlackNotificationAction
{
    public function execute(string $slackChannelType, string $message)
    {
        SlackChannel::where('popis', $slackChannelType)->each(function ($slackChannel) use ($message) {
            SlackAlert::to($slackChannel->webhook)->message($message);
        });
    }
}
