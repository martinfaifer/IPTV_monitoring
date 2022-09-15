<?php

namespace App\Services\StreamDiagnostic\FFMpeg;

use App\Actions\Streams\Analyze\CheckAudioVideoSynchronizationAction;
use App\Actions\Streams\Analyze\FfProbeAnalyzeAction;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\LazyCollection;

class StreamDiagnosticFfProbeService
{
    public function __construct(object $stream)
    {
        $lock = Cache::lock('runningFfprobe_'.$stream->id, 10);
        if ($lock->get()) {
            $this->monitoring($stream);
        }
    }

    public function monitoring(object $stream)
    {
        $ffprobeOutput = (new FfProbeAnalyzeAction())->execute($stream);
        if (! empty($ffprobeOutput)) {
            $ffprobeLazyCollectionData = LazyCollection::make(function () use ($ffprobeOutput) {
                foreach ($ffprobeOutput as $ffprobeData) {
                    yield $ffprobeData;
                }
            });
            // (new CheckAudioVideoSynchronizationAction())->execute();
            new StreamDiagnosticFfProbeFillTsDuckPidData($ffprobeLazyCollectionData, $stream);
        }
    }
}
