<?php

namespace App\Http\Controllers\Settings\Dashboard\Network;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Network\ShowAvgNetworkSpeedAction;

class AvgNetworkSpeedController extends Controller
{
    public function __invoke(ShowAvgNetworkSpeedAction $showAvgNetworkSpeedAction)
    {
        return $showAvgNetworkSpeedAction->execute();
    }
}
