<?php

namespace App\Actions\Webhook;

use App\Models\Stream;
use App\Models\Webhook;
use App\Models\WebhookSendOption;
use Spatie\WebhookServer\WebhookCall;

class SendStreamCrashWebhookAction
{
    public function execute(object $stream, string $status)
    {
        if ($status == Stream::STATUS_CAN_NOT_START) {
            $webhooks = Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'alerts')->first()->id)->get();

            if (count($webhooks) > 0) {
                foreach ($webhooks as $webhook) {
                    WebhookCall::create()
                        ->url($webhook->uri)
                        ->payload([
                            'error' => $stream->nazev
                        ])
                        ->useSecret($webhook->secret)
                        ->dispatch();
                }
            }
        }
    }
}
