<?php

namespace App\Actions\Streams\API;

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
use App\Actions\Streams\GetStreamVideoImageAction;

class GetStreamsWithProblemsAction
{
    public $result = [];
    public function execute()
    {
        Stream::where('status', 'can_not_start')->get()->each(function (Stream $stream) {
            $this->result[] = [
                'id' => $stream->id . "_not_running",
                'img' => config('app.url') . "/" . (new GetStreamVideoImageAction())->execute($stream, true),
                'name' => $stream->nazev,
                'stream_url' => $stream->stream_url,
                'status' => $stream->status,
                'updated_at' => !blank($stream->updated_at) ? $stream->updated_at : null,
            ];
        });

        if (Cache::has('pts_problem_streams')) {
            $pts_problem_streams = Cache::get('pts_problem_streams');

            foreach ($pts_problem_streams as $stream_with_pts_problem) {
                $this->result[] = [
                    'id' => $stream_with_pts_problem['id'] . "_pts_problem",
                    // 'img' => config('app.url') . "/" . (new GetStreamVideoImageAction())->execute(Stream::find($stream_with_pts_problem['id']), true),
                    'name' => $stream_with_pts_problem['stream']['nazev'],
                    'stream_url' => $stream_with_pts_problem['stream']['stream_url'],
                    'status' => 'pts_problem',
                    'monitored_at' => !blank($stream_with_pts_problem['updated_at']) ? $stream_with_pts_problem['updated_at'] : null,
                ];
            }
        }

        return [
            'status' => "success",
            'data' => $this->result,
        ];
    }
}
