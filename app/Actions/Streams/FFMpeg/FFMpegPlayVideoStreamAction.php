<?php

namespace App\Actions\Streams\FFMpeg;

use App\Models\VideoPid;

class FFMpegPlayVideoStreamAction
{
    public function execute(object $stream): void
    {
        if (str_contains($stream->stream_url, 'http')) {
            $command = "ffmpeg -i {$stream->stream_url} -c:v libx264 -b:v 2000k -c:a aac -strict experimental -b:a 128k " . public_path("storage/videos/{$stream->id}.m3u8");
            // ffmpeg -i {$stream->stream_url} -c:v h264_nvenc -b:v 2000k -c:a aac -strict experimental -b:a 128k public_path("storage/videos/{$stream->id}.m3u8")
            // ffmpeg -i input_video.mp4 -c:v h264_qsv -b:v 2000k -c:a aac -strict experimental -b:a 128k output_video.mp4

        } else {
            $command = "ffmpeg -i udp://{$stream->stream_url} -c:v libx264 -b:v 2000k -c:a aac -strict experimental -b:a 128k " . public_path("storage/videos/{$stream->id}.m3u8");
            // ffmpeg -i {$stream->stream_url} -c:v h264_nvenc -b:v 2000k -c:a aac -strict experimental -b:a 128k public_path("storage/videos/{$stream->id}.m3u8")
        }

        $pid = shell_exec($command);
        VideoPid::create([
            'stream_id' => $stream->id,
            'pid' => $pid,
        ]);
    }
}
