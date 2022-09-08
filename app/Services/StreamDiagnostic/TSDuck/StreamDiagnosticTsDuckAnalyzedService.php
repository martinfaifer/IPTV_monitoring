<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use Illuminate\Support\Collection;

class StreamDiagnosticTsDuckAnalyzedService
{
    public function __construct(Collection $tsDuckCollection, object $stream)
    {
        if ($tsDuckCollection->has('ts')) {
            new StreamDiagnosticTsDuckAnalyzeTransportStreamService($tsDuckCollection->only('ts'), $stream);
        }

        if ($tsDuckCollection->has('services')) {
            new StreamDiagnosticTsDuckAnalyzeServiceStreamService($tsDuckCollection->only('services'), $stream);
        }

        if ($tsDuckCollection->has('pids')) {
            new StreamDiagnosticTsDuckAnalyzePidStreamService($tsDuckCollection->only('pids'), $stream);
        }
    }
}
