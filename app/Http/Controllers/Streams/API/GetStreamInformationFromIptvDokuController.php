<?php

namespace App\Http\Controllers\Streams\API;

use App\Actions\Streams\API\GetStreamInformationFromIptvDokuAction;
use App\Http\Controllers\Controller;
use App\Models\Stream;

class GetStreamInformationFromIptvDokuController extends Controller
{
    public function __invoke(Stream $stream, GetStreamInformationFromIptvDokuAction $getStreamInformationFromIptvDokuAction)
    {
        return $getStreamInformationFromIptvDokuAction->execute($stream);
    }
}
