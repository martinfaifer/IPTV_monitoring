<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Cache\GetStreamPidDiscontinuityAction;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class StreamPidDiscontinuityController extends Controller
{
    public function __invoke(Stream $stream, int $pid)
    {
        return (new GetStreamPidDiscontinuityAction())->execute($stream, $pid);
    }
}
