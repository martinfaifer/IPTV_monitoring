<?php

namespace App\Services\StreamDiagnostic\CheckPids;

use Illuminate\Support\Facades\Cache;
use App\Actions\Streams\ProblemPids\StoreProblemPidsAction;

class CheckNumberOfErrorsService
{
    public function check(string $pid, null|int $pidErrors, int $streamId)
    {
        $numberOfProblemPidErrors = Cache::get('pidTreashold');

        if (is_null($pidErrors)) {
            $pidErrors = 0;
        }

        if ($pidErrors >= $numberOfProblemPidErrors) {
            (new StoreProblemPidsAction())->execute(
                pid: $pid,
                pidErrors: $pidErrors,
                streamId: $streamId,
            );
        }
    }
}
