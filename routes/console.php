<?php

use App\Actions\Streams\UpdateStreamStatusAction;
use App\Jobs\CreateImageFromStreamJob;
use App\Jobs\StartStreamDiagnosticJob;
use App\Models\Stream;
use App\Services\StreamDiagnostic\FFMpeg\StreamDiagnosticFfProbeService;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;

Artisan::command('streams:diagnostic', function () {
    $streams = Stream::where('status', Stream::STATUS_WAITING)->get();
    foreach ($streams as $stream) {
        StartStreamDiagnosticJob::dispatch($stream);
        // nastavení sppozdení, kvuli pretizení HW
        sleep(1);
    }
});

Artisan::command('streams:check_if_running', function () {
    $streams = Stream::where('status', Stream::STATUS_MONITORING)->get();
    if (! $streams->isEmpty()) {
        foreach ($streams as $stream) {
            if (! Cache::has('streamIsMonitoring_'.$stream->id)) {
                (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_CAN_NOT_START);
            } else {
                $processPid = Cache::get('streamIsMonitoring_'.$stream->id);
                if (! file_exists('/proc/'.$processPid['processPid'])) {
                    (new UpdateStreamStatusAction())->execute($stream, Stream::STATUS_CAN_NOT_START);
                    Cache::pull('streamIsMonitoring_'.$stream->id);
                }
            }
        }
    }
});

Artisan::command('streams:start_crashed', function () {
    $streams = Stream::where('status', Stream::STATUS_CAN_NOT_START)->get();
    foreach ($streams as $stream) {
        Cache::pull('streamIsMonitoring_'.$stream->id);
        StartStreamDiagnosticJob::dispatch($stream);
    }
});

Artisan::command('streams:start_issue', function () {
    $streams = Stream::where('status', Stream::STATUS_ISSUE)->get();
    foreach ($streams as $stream) {
        Cache::pull('streamIsMonitoring_'.$stream->id);
        StartStreamDiagnosticJob::dispatch($stream);
    }
});

Artisan::command('streams:create_image', function () {
    $streams = Stream::where('status', Stream::STATUS_MONITORING)->get();
    foreach ($streams as $stream) {
        CreateImageFromStreamJob::dispatch($stream)->onQueue('ffmpeg');
    }
});

Artisan::command('streams:kill', function () {
    do {
        $streams = Stream::where([
            ['status', '!=', Stream::STATUS_WAITING],
            ['status', '!=', Stream::STATUS_STOPPED],
        ])->get();

        if ($streams->isEmpty()) {
            exit('killnuto vse');
        }

        foreach ($streams as $stream) {
            if (Cache::has('streamIsMonitoring_'.$stream['id'])) {
                $processPid = Cache::get('streamIsMonitoring_'.$stream['id']);
                shell_exec("kill -9 {$processPid['processPid']}");
                Cache::pull('streamIsMonitoring_'.$stream['id']);
            }
            (new UpdateStreamStatusAction())->execute((object) $stream, Stream::STATUS_WAITING);
            Artisan::call('horizon:clear');
            Cache::flush();
        }
        sleep(1);
    } while ($streams);
});

Artisan::command('ffprobe:test', function () {
    $stream = Stream::find(9);
    // new StreamDiagnosticFfProbeService($stream);
    new StreamDiagnosticFfProbeService($stream);
});
