<?php

namespace App\Http\Controllers\Settings\Dashboard\Network;

use App\Actions\Network\ShowAvgNetworkSpeedAction;
use App\Http\Controllers\Controller;

class AvgNetworkSpeedController extends Controller
{
    public function __invoke(ShowAvgNetworkSpeedAction $showAvgNetworkSpeedAction)
    {
        return $showAvgNetworkSpeedAction->execute();
    }
}
