<?php

namespace App\Actions\Streams;

use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Models\Stream;

class UpdateStreamAction
{
    public function execute(object $stream, $formData)
    {
        return rescue(function () use ($stream, $formData) {
            $status = $this->pick_stream_status($stream, $formData->changeStreamStatus);
            $stream->update([
                'nazev' => $formData->nazev,
                'status' => $status,
            ]);

            return true;
        }, function () {
        });
    }

    protected function pick_stream_status(object $stream, bool $status)
    {
        if ($status == false) {
            return $stream->status;
        }

        if ($stream->status == Stream::STATUS_STOPPED) {
            (new UnlockStreamUrlAction($stream))->execute();

            return Stream::STATUS_WAITING;
        } else {
            (new MarkStreamForKillAction($stream->stream_url))->execution();

            return Stream::STATUS_STOPPED;
        }
    }
}
