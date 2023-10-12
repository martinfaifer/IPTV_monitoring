<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Models\Stream;
use Illuminate\Support\Collection;
use App\Actions\Streams\UpdateStreamStatusAction;

class StreamDiagnosticTsDuckAnalyzedService
{
    public function __construct(Collection $tsDuckCollection, object $stream)
    {

        // kontrola zda stream ma status STATUS_CAN_NOT_START, pokud má změnit na STATUS_MONITORING
        if ($stream->status == Stream::STATUS_CAN_NOT_START) {
            (new UpdateStreamStatusAction())->execute(stream: $stream, status: Stream::STATUS_MONITORING);
        }

        if ($tsDuckCollection->has('ts')) {
            new StreamDiagnosticTsDuckAnalyzeTransportStreamService(tsDuckCollection: $tsDuckCollection->only('ts'), stream: $stream);
        }

        if ($tsDuckCollection->has('services')) {
            new StreamDiagnosticTsDuckAnalyzeServiceStreamService(tsDuckCollection: $tsDuckCollection->only('services'), stream: $stream);
        }

        // if ($tsDuckCollection->has('pids')) {
        //     new StreamDiagnosticTsDuckAnalyzePidStreamService(tsDuckCollection: $tsDuckCollection->only('pids'), stream: $stream);
        // }
    }
}
