<?php

namespace App\Http\Controllers\Streams;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Cache\GetStreamPidDiscontinuityStartedTimeAction;

class StreamPidDiscontinuityStartedTimeController extends Controller
{
    public function __invoke(Stream $stream, int $pid)
    {
        return (new GetStreamPidDiscontinuityStartedTimeAction())->execute(stream: $stream, pid: $pid);
    }
}
