<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ApiStreamController;
use App\Http\Controllers\API\ApiStreamAnalyzeController;
use App\Http\Controllers\Streams\ApiStreamStopController;
use App\Http\Controllers\Streams\ApiStreamAlertController;
use App\Http\Controllers\Streams\ApiStreamImageController;
use App\Http\Controllers\Streams\ApiStreamStartController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth.basic')->group(function () {
    Route::prefix('v2')->group(function () {
        Route::prefix('stream')->group(function () {
            Route::get('alerts', ApiStreamAlertController::class);
            Route::get('by-ip/{ip}', [ApiStreamController::class, 'show_by_ip'])->middleware('isAdmin');
            Route::get('{stream}', [ApiStreamController::class, 'show'])->middleware('isAdmin');
            Route::post('', [ApiStreamController::class, 'store'])->middleware('isAdmin');
            Route::delete('{stream}', [ApiStreamController::class, 'destroy'])->middleware('isAdmin');
            Route::delete('by-ip/{ip}', [ApiStreamController::class, 'destroy_by_ip'])->middleware('isAdmin');
            Route::post('analyze', ApiStreamAnalyzeController::class)->middleware('isAdmin');
            Route::get('{stream}/image', ApiStreamImageController::class)->middleware('isAdmin');
            Route::patch('{stream}/stop', ApiStreamStopController::class)->middleware('isAdmin');
            Route::patch('{stream}/start', ApiStreamStartController::class)->middleware('isAdmin');
        });
    });
});
