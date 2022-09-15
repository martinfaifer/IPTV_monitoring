<?php

namespace App\Actions\Cache;

use Illuminate\Support\Facades\Cache;

class StoreStreamsErrorHistoryAction
{
    public function execute(object $stream, string $status)
    {
        $newInput = [
            'status' => $this->get_status_for_frontend($status),
            'stream' => $stream->nazev,
            'msg' => $this->get_message_for_frontend($status),
            'created_at' => now(),
        ];

        if (Cache::has('streamsErrorHistory')) {
            $original = Cache::get('streamsErrorHistory');
            $original[] = [...$newInput];

            if (count($original) == 50) {
                array_shift($original);
            }

            Cache::put('streamsErrorHistory', $original);
        } else {
            Cache::put(
                'streamsErrorHistory',
                [
                    $newInput,
                ],
            );
        }
    }

    private function get_status_for_frontend(string $status): string
    {
        return match ($status) {
            'waiting' => 'waiting',
            'monitoring' => 'monitoring',
            'starting' => 'starting',
            'stopped' => 'stop',
            'can_not_start' => 'error',
            'issue' => 'issue',
            'crash' => 'crash'
        };
    }

    private function get_message_for_frontend(string $status): string
    {
        return match ($status) {
            'waiting' => 'Čeká na spuštění',
            'monitoring' => 'Dohleduje se',
            'starting' => 'Zařazuje se do fronty na dohled',
            'stopped' => 'Dohled je zastaven',
            'can_not_start' => 'Ve výpadku',
            'issue' => 'Vyskytla se chyba ve streamu / přestal odpovídat process',
            'crash' => 'Přestala fungovat diagnostika streamu'
        };
    }
}
