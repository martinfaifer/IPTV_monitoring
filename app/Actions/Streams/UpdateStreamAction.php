<?php

namespace App\Actions\Streams;

use App\Models\Stream;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Streams\Analyze\MarkStreamForKillAction;

class UpdateStreamAction
{
    public function execute(object $stream, $formData)
    {
        return rescue(function () use ($stream, $formData) {
            $status = $this->pick_stream_status($stream, $formData->changeStreamStatus);
            $stream->update([
                'nazev' => $formData->nazev,
                'status' => $status
            ]);
            return true;
        }, function () {
            false;
        });
    }

    protected function pick_stream_status(object $stream, bool $status)
    {
        if ($status == false) {
            return $stream->status;
        }

        if ($stream->status == Stream::STATUS_STOPPED) {
            (new UnlockStreamUrlAction($stream))->handle();
            return Stream::STATUS_WAITING;
        }

        if ($stream->status == Stream::STATUS_MONITORING) {
            (new MarkStreamForKillAction($stream->stream_url))->execution();
            return Stream::STATUS_STOPPED;
        }

        if ($stream->status == Stream::STATUS_WAITING) {
            (new MarkStreamForKillAction($stream->stream_url))->execution();
            return Stream::STATUS_STOPPED;
        }
    }
}
