<?php

namespace App\Actions\Streams\API;

use App\Models\Stream;
use App\Http\Resources\ShowAudioPidResource;
use App\Http\Resources\ShowVideoPidResource;
use App\Http\Resources\ShowServicePidResource;
use App\Actions\Streams\GetStreamVideoImageAction;
use App\Actions\Streams\Charts\GetStreamPidChartAction;
use App\Actions\Streams\ProblemPids\ShowProblemPidsAction;

class ShowStreamInformationAction
{
    public function execute(int $streamId)
    {
        $stream = Stream::find($streamId);

        return [
            'status' => 'success',
            'data' => [
                'img' => config('app.url') . (new GetStreamVideoImageAction())->execute($stream, true),
                'name' => $stream->nazev,
                'streamStatus' => $stream->status,
                'streamId' => $stream->id,
                'monitored_at' => $stream->monitored_at,
                'history' => $stream->history,
                'problems' => (new ShowProblemPidsAction())->execute($stream),
                'streamTS' => new ShowServicePidResource($stream),
                'audioPids' => new ShowAudioPidResource($stream),
                'videoPids' => new ShowVideoPidResource($stream),
                'AVbitrate' => [],
            ],
        ];
    }

    protected function getPidsData(object $stream, string $pidType)
    {
        if ($pidType == "audio") {
            $pids = new ShowAudioPidResource($stream);
        } else {
            $pids = new ShowVideoPidResource($stream);
        }
        return $pids;
        // find charts for each pid

        foreach ($pids as $pid) {
            return $pid;
            $pid['chart'] = (new GetStreamPidChartAction())->execute(stream: $stream, pid: $pid['pid']);
        }

        return $pids;
    }
}
