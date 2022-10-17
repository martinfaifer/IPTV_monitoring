<?php

namespace App\Actions\Streams;

use App\Actions\Cache\StoreStreamsErrorHistoryAction;
use App\Jobs\SendErrorStreamWebhookJob;
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

            // SendErrorStreamWebhookJob::dispatch($stream, $status);

            (new StoreStreamsErrorHistoryAction())->execute($stream, $status);
        }
    }
}
