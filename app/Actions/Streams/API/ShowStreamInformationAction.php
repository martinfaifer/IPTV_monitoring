<?php

namespace App\Actions\Streams\API;

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
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
                'audioCharts' => $this->getPidsData($stream, 'audio'),
                'videoCharts' => $this->getPidsData($stream, 'video'),
                'AVbitrate' => [],
            ],
        ];
    }

    protected function getPidsData(object $stream, string $pidType)
    {
        $charts = [];

        if ($pidType == 'audio') {
            $pids = Cache::has('streamAudioPids_' . $stream->id)
                ? Cache::get('streamAudioPids_' . $stream->id)
                : [];
        } else {
            $pids = Cache::has('streamVideoPids_' . $stream->id)
                ? Cache::get('streamVideoPids_' . $stream->id)
                : [];
        }

        if (empty($pids)) {
            return $charts;
        }

        foreach ($pids as $pid) {
            $charts[$pid['pid']] = (new GetStreamPidChartAction())->execute(stream: $stream, pid: $pid['pid']);
        }

        return $charts;
    }
}
