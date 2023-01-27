<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use App\Enums\CacheKeyEnum;
use App\Models\StreamHistoryStatus;
use Illuminate\Support\Facades\Cache;
use App\Jobs\SendSlackNotificationJob;
use App\Jobs\SendErrorStreamWebhookJob;
use App\Events\BroadcastStreamsHistoryStatusEvent;
use App\Actions\Cache\UpdateStreamCacheStatusAction;
use App\Actions\Cache\StoreStreamsErrorHistoryAction;
use App\Models\SlackChannel;

class UpdateStreamStatusAction
{
    public $monitored_at = null;

    public function execute(object $stream, string $status)
    {
        // if ($status == Stream::STATUS_CAN_NOT_START) {

        //     $this->check_stream_status_in_cache(stream: $stream, status: $status);
        // } else {
        //     Cache::pull($stream->id . "_" . Stream::STATUS_CAN_NOT_START);
        //     $this->update_stream_status_and_share_it(stream: $stream, status: $status);
        // }

        if ($status != Stream::STATUS_CAN_NOT_START) {
            Cache::pull($stream->id . "_" . Stream::STATUS_CAN_NOT_START);
        }

        $this->update_stream_status_and_share_it(stream: $stream, status: $status);
    }

    protected function update_stream_status_and_share_it(object $stream, string $status)
    {
        $cachedStream = Cache::get(CacheKeyEnum::STREAM_STATUS->value . '_' . $stream->id);
        if (!is_null($cachedStream)) {
            $streamStatus = $cachedStream['value'];
        } else {
            $streamStatus = $stream->status;
        }

        if ($streamStatus != $status) {
            // stream byl ve výpadku nebo se spustilo dohledování
            if ($status == Stream::STATUS_MONITORING) {
                // doba od kdy se dohleduje stream
                $this->monitored_at = now();
            }

            $stream->update([
                'status' => $status,
                'monitored_at' => $this->monitored_at,
            ]);

            StreamHistoryStatus::create([
                'stream_id' => $stream->id,
                'status' => $status
            ]);

            (new UpdateStreamCacheStatusAction())->execute(status: $status, streamId: $stream->id);

            (new StoreStreamsErrorHistoryAction())->execute(stream: $stream, status: $status);

            // fire event for broacast information to notification
            event(new BroadcastStreamsHistoryStatusEvent());
        }
    }

    protected function check_stream_status_in_cache(object $stream, string $status)
    {
        // kontrola zda stream je jiz zaveden v cache
        if (!Cache::has($stream->id . "_" . Stream::STATUS_CAN_NOT_START)) {
            Cache::put($stream->id . "_" . Stream::STATUS_CAN_NOT_START, 1);
        } else {

            // pocet jiz pruchozich stavů, pokud je 3 tak se oznami alert
            $streamInErrorState = Cache::get($stream->id . "_" . Stream::STATUS_CAN_NOT_START);
            if ($streamInErrorState == 3) {
                $this->update_stream_status_and_share_it($stream, $status);
            } else {
                Cache::increment($stream->id . "_" . Stream::STATUS_CAN_NOT_START);
            }
        }
    }
}
