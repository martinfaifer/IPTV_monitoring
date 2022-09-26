<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StreamAnalyzeApiRequest;
use App\Actions\Streams\Analyze\TsDuckAnalyzeAction;

class ApiStreamAnalyzeController extends Controller
{
    public function __invoke(StreamAnalyzeApiRequest $request, TsDuckAnalyzeAction $tsDuckAnalyzeAction)
    {
        return $tsDuckAnalyzeAction->execute($request->stream_url);
    }
}
