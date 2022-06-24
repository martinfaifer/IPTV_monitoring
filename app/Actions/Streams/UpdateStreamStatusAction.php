<?php

namespace App\Actions\Streams;

use App\Actions\Cache\StoreStreamsErrorHistoryAction;
use App\Actions\Webhook\SendWebhookAction;
use App\Models\Stream;

class UpdateStreamStatusAction
{
    public $monitored_at = null;

    public function execute(object $stream, string $status)
    {
        if ($stream->status != $status) {
            if ($status == Stream::STATUS_MONITORING) {
                $this->monitored_at = now();
            }
            $stream->update([
                'status' => $status,
                'monitored_at' => $this->monitored_at,
            ]);

            (new SendWebhookAction())->execute($status, [
                'data' => [
                    [
                        'stream' => $stream->nazev,
                        'status' => $status,
                    ],
                ],
            ]);
            (new StoreStreamsErrorHistoryAction())->execute($stream, $status);
        }
    }
}
