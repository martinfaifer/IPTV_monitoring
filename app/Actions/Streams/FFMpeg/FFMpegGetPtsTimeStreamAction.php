<?php

namespace App\Actions\Streams\FFMpeg;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Process;
use App\Actions\Streams\Analyze\FfProbeAnalyzeAction;

class FFMpegGetPtsTimeStreamAction
{
    public function execute(object $stream): mixed
    {

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

        sleep(15);
        $streamPtsFile = file_get_contents(public_path("storage/streamsPts/" . Str::slug($stream->nazev) . ".txt"));
        dd($streamPtsFile);
        dd(explode("pts_time", $streamPtsFile));

        // $ffprobeAnalyzeAction = new FfProbeAnalyzeAction();
        // $firstOutput = $ffprobeAnalyzeAction->execute(stream: $stream);

        // try {
        //     if (array_key_exists('programs', $firstOutput)) {
        //         $firstPts = ($firstOutput['programs'][0]['streams'][0]['start_time']);
        //     }

        //     $secondOutput = $ffprobeAnalyzeAction->execute(stream: $stream);

        //     if (array_key_exists('programs', $secondOutput)) {
        //         $secondPts = ($secondOutput['programs'][0]['streams'][0]['start_time']);
        //     }

        //     $ptsDiff = $secondPts - $firstPts;

        //     echo "DIFF ----> " . $ptsDiff . PHP_EOL;

        //     return (int) round($ptsDiff);
        // } catch (\Throwable $th) {
        //     return (int) 0;
        // }
    }
}
