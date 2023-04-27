<?php

namespace App\Actions\Streams\Analyze;

class FfProbeAnalyzeAction
{
    public function execute(object $stream)
    {

        if (str_contains($stream->stream_url, 'http')) {
            $ffprobeResult = shell_exec("ffprobe -v quiet -print_format json -show_programs {$stream->stream_url} -timeout 2");
        } else {
            $ffprobeResult = shell_exec("ffprobe -v quiet -print_format json -show_programs udp://{$stream->stream_url} -timeout 2");
        }

        return match ($ffprobeResult) {
            is_null($ffprobeResult) => [],
            empty($ffprobeResult) => [],
            'Killed' => [],
            default => json_decode($ffprobeResult, true)
        };
    }
}
