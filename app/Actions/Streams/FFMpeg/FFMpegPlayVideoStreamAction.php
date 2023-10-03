<?php

namespace App\Actions\Streams\FFMpeg;

use App\Models\VideoPid;

class FFMpegPlayVideoStreamAction
{
    public function execute(object $stream): void
    {
        if (str_contains($stream->stream_url, 'http')) {
            $command = "ffmpeg -i {$stream->stream_url} -c:v h264_cuvid -c:a aac -f hls -hls_time 5 -hls_list_size 5 -hls_flags delete_segments " . public_path("storage/videos/{$stream->id}.m3u8") . " > /dev/null 2>&1 & echo $!; ";
        } else {
            $command = "ffmpeg -i  udp://{$stream->stream_url} -c:v h264_cuvid -c:a aac -f hls -hls_time 5 -hls_list_size 5 -hls_flags delete_segments " . public_path("storage/videos/{$stream->id}.m3u8") . " > /dev/null 2>&1 & echo $!; ";
        }

        $pid = shell_exec($command);

        VideoPid::create([
            'stream_id' => $stream->id,
            'pid' => $pid,
        ]);
    }
}
