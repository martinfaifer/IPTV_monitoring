<?php

namespace App\Http\Controllers\Search;

use App\Actions\Search\SearchAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __invoke(Request $request, SearchAction $searchAction)
    {
        return $searchAction->execute(searcheableData: $request);
    }
}
