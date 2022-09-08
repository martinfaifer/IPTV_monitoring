<?php

use App\Models\Stream;
use Illuminate\Support\Facades\Cache;
use App\Jobs\CreateImageFromStreamJob;
use App\Jobs\StartStreamDiagnosticJob;
use Illuminate\Support\Facades\Artisan;
use App\Actions\Streams\UpdateStreamStatusAction;
use App\Services\StreamDiagnostic\TSDuck\StreamDiagnosticTsDuckService;
use App\Services\StreamDiagnostic\FFMpeg\StreamDiagnosticFfProbeService;

// Artisan::command('streams:start_crashed', function () {
//     $streams = Stream::where('status', Stream::STATUS_CAN_NOT_START)->get();
//     foreach ($streams as $stream) {
//         Cache::pull('streamIsMonitoring_' . $stream->id);
//         StartStreamDiagnosticJob::dispatch($stream);
//     }
// });

// Artisan::command('streams:start_issue', function () {
//     $streams = Stream::where('status', Stream::STATUS_ISSUE)->get();
//     foreach ($streams as $stream) {
//         Cache::pull('streamIsMonitoring_' . $stream->id);
//         StartStreamDiagnosticJob::dispatch($stream);
//     }
// });


// Artisan::command('ffprobe:test', function () {
//     $stream = Stream::find(9);
//     // new StreamDiagnosticFfProbeService($stream);
//     new StreamDiagnosticFfProbeService($stream);
// });
