<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use App\Jobs\SendErrorStreamWebhookJob;
use App\Actions\Webhook\SendWebhookAction;
use App\Actions\Cache\StoreStreamsErrorHistoryAction;
use App\Actions\Webhook\SendStreamCrashWebhookAction;

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

            // SendErrorStreamWebhookJob::dispatch($stream, $status);

            (new StoreStreamsErrorHistoryAction())->execute($stream, $status);
        }
    }
}
