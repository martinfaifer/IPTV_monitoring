<?php

namespace App\Http\Controllers;

use App\Actions\Streams\HistoryStatuses\ShowStreamsHistoryStatusesAction;

class StreamsHistoryStatusController extends Controller
{
    public function __invoke(ShowStreamsHistoryStatusesAction $showStreamsHistoryStatusesAction)
    {
        return $showStreamsHistoryStatusesAction->execute();
    }
}
