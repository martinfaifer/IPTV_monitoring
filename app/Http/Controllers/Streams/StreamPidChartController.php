<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Streams\Charts\GetStreamPidChartAction;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class StreamPidChartController extends Controller
{
    public function __invoke(Stream $stream, int $pid, GetStreamPidChartAction $getStreamPidChartAction)
    {
        return $getStreamPidChartAction->execute($stream, $pid);
    }
}
