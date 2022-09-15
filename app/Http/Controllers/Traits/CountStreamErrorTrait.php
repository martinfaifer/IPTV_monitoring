<?php
namespace App\Http\Controllers\Traits;

use Illuminate\Support\Facades\Cache;
use App\Actions\Cache\GetStreamPidDiscontinuityAction;

trait CountStreamErrorTrait
{
    public function count_errors(string $pidType, $stream)
    {
        if ($pidType == 'audio') {
            $pids = Cache::has('streamAudioPids_' . $stream['id'])
                ? Cache::get('streamAudioPids_' . $stream['id'])
                : [];
        }

        if ($pidType == 'video') {
            $pids = Cache::has('streamVideoPids_' . $stream['id'])
                ? Cache::get('streamVideoPids_' . $stream['id'])
                : [];
        }
        $errors = 0;
        foreach ($pids as $pid) {
            $errors = $errors + (new GetStreamPidDiscontinuityAction())->execute((object) $stream, $pid['pid']);
        }

        return $errors;
    }
}
