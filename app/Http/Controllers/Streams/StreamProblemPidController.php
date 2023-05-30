<?php

namespace App\Http\Controllers\Streams;

use App\Http\Resources\IndexStreamProblemPidResource;
use App\Models\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Streams\ProblemPids\ShowProblemPidsAction;


class StreamProblemPidController extends Controller
{

    public function index()
    {
        return new IndexStreamProblemPidResource([]);
    }

    public function show(Stream $stream)
    {
        return (new ShowProblemPidsAction())->execute($stream);
    }
}
