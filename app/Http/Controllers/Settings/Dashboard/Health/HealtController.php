<?php

namespace App\Http\Controllers\Settings\Dashboard\Health;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Health\Charts\GetHealthChartsDataAction;

class HealtController extends Controller
{
    public function __invoke(string $check_name)
    {
        return (new GetHealthChartsDataAction())->execute($check_name);
    }
}
