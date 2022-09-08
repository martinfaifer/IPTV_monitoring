<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actions\Streams\HistoryStatuses\ShowStreamsHistoryStatusesAction;

class StreamsHistoryStatusController extends Controller
{
    public function __invoke(ShowStreamsHistoryStatusesAction $showStreamsHistoryStatusesAction)
    {
        return $showStreamsHistoryStatusesAction->execute();
    }
}
