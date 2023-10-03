<?php

namespace App\Actions\Streams;

use App\Models\ProblemPts;
use App\Models\Stream;
use App\Actions\Streams\Analyze\UnlockStreamUrlAction;
use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;
use App\Models\VideoPid;

class UpdateStreamAction
{
    public function execute(object $stream, $formData)
    {
        return rescue(function () use ($stream, $formData) {
            $pts = false;
            $playVideo = false;

            if (!is_null($formData->check_pts)) {
                $pts = $formData->check_pts;
            }

            if (!is_null($formData->play_video)) {
                $playVideo = $formData->play_video;
            }

            $status = $this->pick_stream_status($stream, $formData->changeStreamStatus);
            $stream->update([
                'nazev' => $formData->nazev,
                'status' => $status,
                'check_pts' => $pts,
                'play_video' => $playVideo
            ]);

            if ($pts == false) {
                // delete from table
                ProblemPts::where('stream_id', $stream->id)->delete();
            }

            // if ($playVideo == false) {
            //     // delete from table and kill process
            //     $videoPid = VideoPid::where('stream_id', $stream->id)->first();
            //     if ($videoPid) {
            //         // kill process
            //         posix_kill($videoPid->pid, SIGTERM);
            //         // delete from table
            //         $videoPid->delete();
            //     }
            // }

            return true;
        }, function () {
        });
    }

    protected function pick_stream_status(object $stream, bool $status): string
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
