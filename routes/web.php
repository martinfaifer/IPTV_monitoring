<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRoleController;
use App\Http\Controllers\UserSlackController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogOutController;
use App\Http\Controllers\UserWebhookController;
use App\Http\Controllers\Search\SearchController;
use App\Http\Controllers\Streams\StreamController;
use App\Http\Controllers\StreamsHistoryStatusController;
use App\Http\Controllers\UserGeneratePasswordController;
use App\Http\Controllers\Streams\CustomStreamsController;
use App\Http\Controllers\Streams\ProblemStreamsController;
use App\Http\Controllers\Streams\RunningStreamsController;
use App\Http\Controllers\Streams\ShowStreamPidsController;
use App\Http\Controllers\Streams\StreamPidChartController;
use App\Http\Controllers\Streams\StreamsHistoryController;
use App\Http\Controllers\Streams\ShowStreamImageController;
use App\Http\Controllers\Streams\NotRunningStreamsController;
use App\Http\Controllers\Streams\ShowFfprobeStreamController;
use App\Http\Controllers\Streams\ShowAudioStreamPidsController;
use App\Http\Controllers\Streams\ShowVideoStreamPidsController;
use App\Http\Controllers\Streams\StreamHistoryStatusController;
use App\Http\Controllers\Streams\ShowServiceStreamPidsController;
use App\Http\Controllers\Settings\Sreams\SettingsStreamController;
use App\Http\Controllers\Streams\StreamPidDiscontinuityController;
use App\Http\Controllers\Settings\Dashboard\Health\HealtController;
use App\Http\Controllers\Settings\Notification\NotificationController;
use App\Http\Controllers\Streams\StreamSettingsInformtionMozaikaController;
use App\Http\Controllers\Streams\StreStreamPidDiscontinuityResetController;
use App\Http\Controllers\Settings\Dashboard\Network\AvgNetworkSpeedController;
use App\Http\Controllers\Streams\API\GetStreamInformationFromIptvDokuController;
use App\Http\Controllers\Settings\Dashboard\SystemInformation\SystemInformationController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function () {
    Route::post('logout', LogOutController::class);
    Route::post('login', LoginController::class);
    Route::get('login', function () {
        return response('', 401);
    })->name('login');
});

Route::group(['middleware' => 'auth'], function () {
    Route::post('search', SearchController::class);

    Route::prefix('users')->group(function () {
        Route::get('user', [UserController::class, 'show']);
        Route::patch('pagination', [UserController::class, 'update_pagination']);
        Route::patch('static-mozaika', [UserController::class, 'update_static_mozaika']);
        Route::patch('password', [UserController::class, 'update_password']);
        Route::get('webhooks', [UserWebhookController::class, 'index']);
        Route::prefix('slack')->group(function () {
            Route::get('', [UserSlackController::class, 'show']);
            Route::post('', [UserSlackController::class, 'store']);
            Route::delete('{slackChannel}', [UserSlackController::class, 'destroy']);
        });
    });

    Route::prefix('streams')->group(function () {
        Route::get('', [StreamController::class, 'index']);
        Route::get('history', StreamsHistoryController::class);
        Route::get('running', RunningStreamsController::class);
        Route::get('problems', ProblemStreamsController::class);
        Route::get('custom', CustomStreamsController::class);
        Route::get('not-running', NotRunningStreamsController::class);
        Route::get('image/{stream}', ShowStreamImageController::class);
        Route::prefix('settings')->group(function () {
            Route::get('{stream}', [StreamSettingsInformtionMozaikaController::class, 'show']);
            Route::patch('{stream}', [StreamSettingsInformtionMozaikaController::class, 'update']);
        });
        Route::get('iptvdokumentace/{stream}', GetStreamInformationFromIptvDokuController::class)->middleware('isView');
        Route::middleware('isView')->prefix('pids')->group(function () {
            Route::get('audio/{stream}', ShowAudioStreamPidsController::class);
            Route::get('video/{stream}', ShowVideoStreamPidsController::class);
            Route::get('service/{stream}', ShowServiceStreamPidsController::class);
            Route::get('discontinuity/{stream}/{pid}', StreamPidDiscontinuityController::class);
            Route::post('discontinuity/{stream}/{pid}', StreStreamPidDiscontinuityResetController::class);
            Route::get('ffprobe/{stream}', ShowFfprobeStreamController::class);
            Route::get('{stream}', ShowStreamPidsController::class);
        });
        Route::get('charts/{stream}/{pid}', StreamPidChartController::class)->middleware('isView');
        Route::get('history/{stream}', StreamHistoryStatusController::class)->middleware('isView');
        Route::get('{stream}', [StreamController::class, 'show'])->middleware('isView');
    });

    Route::middleware('isView')->prefix('settings')->group(function () {
        Route::prefix('dashboard')->group(function () {
            Route::get('', \Spatie\Health\Http\Controllers\HealthCheckJsonResultsController::class);
            Route::get('streams/status-history', StreamsHistoryStatusController::class);
            Route::get('network-speed', AvgNetworkSpeedController::class);
            Route::get('server-information', [SystemInformationController::class, 'ram']);
            Route::get('health/{check_name}', HealtController::class);
        });
        Route::prefix('streams')->group(function () {
            Route::get('', [SettingsStreamController::class, 'index']);
            Route::post('', [SettingsStreamController::class, 'store']);
            Route::patch('{stream}', [SettingsStreamController::class, 'update']);
            Route::delete('{stream}', [SettingsStreamController::class, 'destroy']);
        });

        Route::middleware('isAdmin')->prefix('users')->group(function () {
            Route::prefix('roles')->group(function () {
                Route::get('', UserRoleController::class);
            });
            Route::get('', [UserController::class, 'index']);
            Route::post('', [UserController::class, 'store']);
            Route::patch('{user}', [UserController::class, 'update']);
            Route::patch('{user}/generate-password', UserGeneratePasswordController::class);
            Route::delete('{user}', [UserController::class, 'destroy']);
        });

        Route::prefix('notifications')->group(function () {
            Route::get('', [NotificationController::class, 'index']);
            Route::post('', [NotificationController::class, 'store']);
            Route::delete('{notification}', [NotificationController::class, 'destroy']);
        });
    });
});
