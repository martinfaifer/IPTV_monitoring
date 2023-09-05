<?php

namespace App\Actions\Streams\FFMpeg;

use App\Actions\Streams\Analyze\FfProbeAnalyzeAction;

class FFMpegGetPtsTimeStreamAction
{
    public function execute(object $stream): int
    {
        $ffprobeAnalyzeAction = new FfProbeAnalyzeAction();
        $firstOutput = $ffprobeAnalyzeAction->execute(stream: $stream);

        try {
            if (array_key_exists('programs', $firstOutput)) {
                $firstPts = ($firstOutput['programs'][0]['streams'][0]['start_time']);
            }

            $secondOutput = $ffprobeAnalyzeAction->execute(stream: $stream);

            if (array_key_exists('programs', $secondOutput)) {
                $secondPts = ($secondOutput['programs'][0]['streams'][0]['start_time']);
            }

            $ptsDiff = $secondPts - $firstPts;

            return (int) round($ptsDiff);
        } catch (\Throwable $th) {
            return (int) 0;
        }
    }
}
