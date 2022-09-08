<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\Search\SearchController;
use App\Http\Controllers\Settings\Dashboard\Network\AvgNetworkSpeedController;
use App\Http\Controllers\Streams\StreamController;
use App\Http\Controllers\StreamsHistoryStatusController;
use App\Http\Controllers\Streams\ProblemStreamsController;
use App\Http\Controllers\Streams\RunningStreamsController;
use App\Http\Controllers\Streams\ShowStreamPidsController;
use App\Http\Controllers\Streams\StreamPidChartController;
use App\Http\Controllers\Streams\StreamsHistoryController;
use App\Http\Controllers\Streams\ShowStreamImageController;
use App\Http\Controllers\Streams\NotRunningStreamsController;
use App\Http\Controllers\Streams\ShowAudioStreamPidsController;
use App\Http\Controllers\Streams\ShowVideoStreamPidsController;
use App\Http\Controllers\Streams\ShowServiceStreamPidsController;
use App\Http\Controllers\Settings\Sreams\SettingsStreamController;
use App\Http\Controllers\Streams\StreamPidDiscontinuityController;
use App\Http\Controllers\Streams\StreamSettingsInformtionMozaikaController;
use App\Http\Controllers\Streams\StreStreamPidDiscontinuityResetController;
use App\Http\Controllers\Streams\API\GetStreamInformationFromIptvDokuController;
use App\Models\AvgNetworkSpeed;
use App\Models\NetworkStatistic;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function () {
    Route::post('login',);
});

Route::post('search', SearchController::class);

Route::prefix('streams')->group(function () {
    Route::get('history', StreamsHistoryController::class);
    Route::get('running', RunningStreamsController::class);
    Route::get('problems', ProblemStreamsController::class);
    Route::get('not-running', NotRunningStreamsController::class);
    Route::get('image/{stream}', ShowStreamImageController::class);
    Route::prefix('settings')->group(function () {
        Route::get('{stream}', [StreamSettingsInformtionMozaikaController::class, 'show']);
        Route::patch('{stream}', [StreamSettingsInformtionMozaikaController::class, 'update']);
    });
    Route::get('iptvdokumentace/{stream}', GetStreamInformationFromIptvDokuController::class);
    Route::prefix('pids')->group(function () {
        Route::get('audio/{stream}', ShowAudioStreamPidsController::class);
        Route::get('video/{stream}', ShowVideoStreamPidsController::class);
        Route::get('service/{stream}', ShowServiceStreamPidsController::class);
        Route::get('discontinuity/{stream}/{pid}', StreamPidDiscontinuityController::class);
        Route::post('discontinuity/{stream}/{pid}', StreStreamPidDiscontinuityResetController::class);
        Route::get('{stream}', ShowStreamPidsController::class);
    });
    Route::get('charts/{stream}/{pid}', StreamPidChartController::class);
    Route::get('{stream}', [StreamController::class, 'show']);
});

Route::prefix('settings')->group(function () {
    Route::prefix("dashboard")->group(function () {
        Route::get("", \Spatie\Health\Http\Controllers\HealthCheckJsonResultsController::class);
        Route::get("streams/status-history", StreamsHistoryStatusController::class);
        Route::get('network-speed', AvgNetworkSpeedController::class);
    });
    Route::prefix('streams')->group(function () {
        Route::get('', [SettingsStreamController::class, 'index']);
        Route::post('', [SettingsStreamController::class, 'store']);
        Route::delete('{stream}', [SettingsStreamController::class, 'destroy']);
    });
});

