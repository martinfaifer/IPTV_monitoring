<?php

namespace App\Actions\Streams;

use App\Actions\Streams\Analyze\MarkStreamForKillAction;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;
use App\Models\ProblemPts;
use App\Models\StreamHistoryStatus;
use App\Models\StreamProblemPid;
use App\Models\StreamProcessPid;
use App\Models\StreamPtsHistory;
use App\Models\StreamSheduler;

class DeleteStreamAction
{
    public function execute(object $stream): bool
    {
        // stop monitoring stream
        (new MarkStreamForKillAction($stream->stream_url))->execution();

        (new KillTsDuckStreamProcessAction())->execute($stream);
        StreamProcessPid::where('stream_id', $stream->id)->delete();
        StreamHistoryStatus::where('stream_id', $stream->id)->delete();
        StreamProblemPid::where('stream_id', $stream->id)->delete();
        ProblemPts::where('stream_id', $stream->id)->delete();
        StreamPtsHistory::where('stream_id', $stream->id)->delete();
        StreamSheduler::where('stream_id', $stream->id)->delete();
        return $stream->delete();
    }
}
