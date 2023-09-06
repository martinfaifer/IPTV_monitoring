<?php

namespace App\Actions\Streams;

use App\Models\ProblemPts;
use App\Models\Stream;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class UpdateStreamAction
{
    public function execute(object $stream, $formData)
    {
        return rescue(function () use ($stream, $formData) {
            $pts = false;

            if (!is_null($formData->check_pts)) {
                $pts = $formData->check_pts;
            }

            $status = $this->pick_stream_status($stream, $formData->changeStreamStatus);
            $stream->update([
                'nazev' => $formData->nazev,
                'status' => $status,
                'check_pts' => $pts
            ]);

            if ($pts == false) {
                // delete from table
                ProblemPts::where('stream_id', $stream->id)->delete();
            }

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

            // kill stream
            (new KillTsDuckStreamProcessAction())->execute($stream);
            return Stream::STATUS_WAITING;
        } else {
            (new MarkStreamForKillAction($stream->stream_url))->execution();

            return Stream::STATUS_STOPPED;
        }
    }
}
