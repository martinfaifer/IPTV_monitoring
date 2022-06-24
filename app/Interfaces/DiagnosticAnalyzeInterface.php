<?php

namespace App\Interfaces;

use Illuminate\Support\Collection;

interface DiagnosticAnalyzeInterface
{
    public function analyze(Collection $collection, object $stream): void;
}
