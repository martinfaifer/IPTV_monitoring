<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests;
    use DispatchesJobs;
    use ValidatesRequests;

    public function success_response(string $message): array
    {
        return [
            'status' => 'success',
            'message' => $message,
        ];
    }

    public function warning_response(string $message): array
    {
        return [
            'status' => 'warning',
            'message' => $message,
        ];
    }

    public function error_response(): array
    {
        return [
            'status' => 'error',
            'message' => 'Nepodařilo se provést akci',
        ];
    }
}
