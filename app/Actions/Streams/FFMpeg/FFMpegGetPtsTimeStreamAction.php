<?php

namespace App\Actions\Streams\FFMpeg;

use App\Models\ProblemPts;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Process;
use App\Actions\Streams\Analyze\FfProbeAnalyzeAction;

class FFMpegGetPtsTimeStreamAction
{
    public function execute(object $stream): mixed
    {
        $ptsTimes = [];
        $diffOfPtsTimes = [];

        rescue(function () use ($stream) {
            unlink(public_path("storage/streamsPts/" . Str::slug($stream->nazev) . ".txt"));
        });

        if (str_contains($stream->stream_url, 'http')) {
            $command = "ffmpeg -skip_frame nokey -i {$stream->stream_url} -vf showinfo -vsync 0 -f null - > " . public_path("storage/streamsPts/" . Str::slug($stream->nazev) . ".txt") . " 2>&1";
        } else {
            $command = "ffmpeg -skip_frame nokey -i udp://{$stream->stream_url} -vf showinfo -vsync 0 -f null - > " . public_path("storage/streamsPts/" . Str::slug($stream->nazev) . ".txt") . " 2>&1";
        }

        rescue(function () use ($command) {
            Process::timeout(5)->run($command);
        });
        sleep(5);
        $streamPtsFile = file_get_contents(public_path("storage/streamsPts/" . Str::slug($stream->nazev) . ".txt"));
        $explodedData = (explode("pts_time:", $streamPtsFile));

        foreach ($explodedData as $ptsData) {
            if (is_numeric(substr($ptsData, 0, 1))) {
                if (!in_array(substr($ptsData, 0, 1), $ptsTimes)) {
                    array_push($ptsTimes, substr($ptsData, 0, 1));
                };
            }
        }

        // take diff from last two
        $allKeysCount = count($ptsTimes) - 1;
        $diffOfPtsTimes = $ptsTimes[$allKeysCount] - $ptsTimes[$allKeysCount - 1];

        echo $stream->nazev . " ----> " . $diffOfPtsTimes;
        return (int) $diffOfPtsTimes;
    }
}
