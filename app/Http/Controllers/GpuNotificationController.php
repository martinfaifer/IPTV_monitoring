<?php

namespace App\Http\Controllers;

use App\Models\Gpu;
use Illuminate\Http\Request;

class GpuNotificationController extends Controller
{
    public function __invoke()
    {
        if (Gpu::where('status', "error")->first()) {
            return $this->success_response("Nefunkční nvidia-smi");
        }

        return $this->error_response();
    }
}
