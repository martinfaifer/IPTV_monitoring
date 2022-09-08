<?php
namespace App\Actions\Streams\Analyze;

use Illuminate\Support\Facades\Cache;

class CheckIfStreamCanBeKillAction
{
    public function __construct(public string $streamUrl)
    {
    }

    public function execution(): bool
    {
        return Cache::has($this->streamUrl . "_stop");
    }
}
