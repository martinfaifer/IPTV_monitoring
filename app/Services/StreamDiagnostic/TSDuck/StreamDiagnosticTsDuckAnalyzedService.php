<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use Illuminate\Support\Collection;

class StreamDiagnosticTsDuckAnalyzedService
{
    public function __construct(Collection $tsDuckCollection, object $stream)
    {
        if ($tsDuckCollection->has('ts')) {
            new StreamDiagnosticTsDuckAnalyzeTransportStreamService(tsDuckCollection: $tsDuckCollection->only('ts'), stream: $stream);
        }

        if ($tsDuckCollection->has('services')) {
            new StreamDiagnosticTsDuckAnalyzeServiceStreamService(tsDuckCollection: $tsDuckCollection->only('services'), stream: $stream);
        }

        if ($tsDuckCollection->has('pids')) {
            new StreamDiagnosticTsDuckAnalyzePidStreamService(tsDuckCollection: $tsDuckCollection->only('pids'), stream: $stream);
        }
    }
}
