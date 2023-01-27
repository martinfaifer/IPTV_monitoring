<?php

namespace App\Http\Controllers\API;

use App\Actions\Streams\Analyze\TsDuckAnalyzeAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StreamAnalyzeApiRequest;

class ApiStreamAnalyzeController extends Controller
{
    public function __invoke(StreamAnalyzeApiRequest $request, TsDuckAnalyzeAction $tsDuckAnalyzeAction)
    {
        return $tsDuckAnalyzeAction->execute(streamUrl: $request->stream_url);
    }
}
