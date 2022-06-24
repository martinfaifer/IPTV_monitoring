<?php

namespace App\Actions\Webhook;

use App\Models\Stream;
use App\Models\Webhook;
use App\Models\WebhookSendOption;
use Spatie\WebhookServer\WebhookCall;

class SendWebhookAction
{
    public function execute(string $status, array $payload)
    {
        $webhookAdresses = $this->get_webhook_creadentials($status);

        if (! $webhookAdresses->isEmpty()) {
            foreach ($webhookAdresses as $webhookAdress) {
                WebhookCall::create()
                    ->url($webhookAdress->uri)
                    ->payload($payload)
                    ->useSecret($webhookAdress->secret)
                    ->dispatch();
            }
        }
    }

    private function get_webhook_creadentials(string $status)
    {
        return match ($status) {
            Stream::STATUS_WAITING => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'infos')->first()->id)->get(),
            Stream::STATUS_MONITORING => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'infos')->first()->id)->get(),
            Stream::STATUS_STOPPED => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'infos')->first()->id)->get(),
            Stream::STATUS_STARTING => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'infos')->first()->id)->get(),
            Stream::STATUS_CAN_NOT_START => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'alerts')->first()->id)->get(),
            Stream::STATUS_ISSUE => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'alerts')->first()->id)->get(),
            'deleted' => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'infos')->first()->id)->get(),
            'user_create' => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'user_infos')->first()->id)->get(),
            'user_delete' => Webhook::where('webhook_send_option_id', WebhookSendOption::where('type', 'user_infos')->first()->id)->get(),
        };
    }
}
