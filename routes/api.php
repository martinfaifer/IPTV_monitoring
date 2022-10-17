<?php

use App\Http\Controllers\API\ApiStreamAnalyzeController;
use App\Http\Controllers\API\ApiStreamController;
use App\Http\Controllers\Streams\ApiStreamAlertController;
use App\Http\Controllers\Streams\ApiStreamImageController;
use App\Http\Controllers\Streams\ApiStreamStopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v2')->group(function () {
    Route::prefix('stream')->group(function () {
        Route::get('alerts', ApiStreamAlertController::class);
        Route::post('', [ApiStreamController::class, 'show']);
        Route::post('create', [ApiStreamController::class, 'store']);
        Route::delete('{stream}', [ApiStreamController::class, 'destroy']);
        Route::post('analyze', ApiStreamAnalyzeController::class);
        Route::get('image/{stream}', ApiStreamImageController::class);
        Route::patch('{stream}/stop', ApiStreamStopController::class);
        Route::patch('{stream}/start', ApiStreamStopController::class);
    });
});
