<?php

namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Cache;
use App\Actions\System\Process\KillTsDuckStreamProcessAction;

class UnlockStreamUrlAction
{
    public function __construct(public object $stream)
    {
    }

    public function execute()
    {
        Cache::pull('streamIsMonitoring_' . $this->stream->id);
        Cache::pull($this->stream->stream_url . '_stop');
        (new KillTsDuckStreamProcessAction())->execute($this->stream);
    }
}
