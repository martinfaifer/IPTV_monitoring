<?php

namespace App\Http\Controllers\Settings\Dashboard\SystemInformation;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SystemInformationController extends Controller
{
    public function ram()
    {
        return shell_exec('free');
    }
}
