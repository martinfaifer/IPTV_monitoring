<?php

namespace App\Http\Controllers\Streams;

use App\Actions\Cache\GetStreamsHistoryAction;
use App\Http\Controllers\Controller;

class StreamsHistoryController extends Controller
{
    public function __invoke(GetStreamsHistoryAction $getStreamsHistoryAction)
    {
        return $getStreamsHistoryAction->execute();
    }
}
