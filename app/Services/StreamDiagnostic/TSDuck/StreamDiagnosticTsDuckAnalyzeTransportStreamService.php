<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Actions\Cache\RemoveItemsFromCache;
use App\Actions\Cache\StoreItemsToCache;
use App\Interfaces\DiagnosticAnalyzeInterface;
use Illuminate\Support\Collection;

class StreamDiagnosticTsDuckAnalyzeTransportStreamService implements DiagnosticAnalyzeInterface
{
    public $country = null;

    public $packets = null;

    public $pcrbitrate = null;

    public function __construct(Collection $tsDuckCollection, object $stream)
    {
        $this->analyze($tsDuckCollection, $stream);
    }

    public function analyze(Collection $tsDuckCollection, object $stream): void
    {
        try {
            foreach ($tsDuckCollection as $collection) {
                if (array_key_exists('packets', (array) $collection)) {
                    if (array_key_exists('invalid-syncs', $collection['packets'])) {
                        $this->check_invalid_sync_in_stream($collection['packets']['invalid-syncs'], $stream);
                    }

                    // transport-errors
                    if (array_key_exists('transport-errors', $collection['packets'])) {
                        $this->check_transport_errors_in_stream($collection['packets']['transport-errors'], $stream);
                    }

                    if (array_key_exists('total', $collection['packets'])) {
                        $this->packets = $collection['packets']['total'];
                    }
                }

                if (array_key_exists('pcr-bitrate', (array) $collection)) {
                    $this->pcrbitrate = $collection['pcr-bitrate'];
                }
            }

            $this->store_to_cache($stream, $this->country, $this->packets, $this->pcrbitrate);
        } catch (\Throwable $th) {
            info("Problem s TS diagnostikou streamu ". $stream->id , [$th]);
        }
    }

    /**
     * kontrola synchronizace audia / vidae
     *
     * @param  string|null  $invalidsyncs
     * @param  object  $stream
     * @return void
     */
    private function check_invalid_sync_in_stream(string|null $invalidsyncs = null, object $stream): void
    {
        $outputErrStats = [];

        if (is_null($invalidsyncs)) {
            $outputErrStats = [
                'status' => 'invalidSync_warning',
                'message' => 'Nepodařilo se získat informaci o synchronizaci audia / videa',
            ];
            (new StoreItemsToCache())->execute(key: 'streamInvalidSync_' . $stream->id, value: $outputErrStats);
        } elseif ($invalidsyncs != '0') {
            $outputErrStats = [
                'status' => 'invalidSync_warning',
                'message' => 'Desynchronizace Audia / videa',
            ];
            (new StoreItemsToCache())->execute(key: 'streamInvalidSync_' . $stream->id, value: $outputErrStats);
        } else {
            (new RemoveItemsFromCache())->execute(key: 'streamInvalidSync_' . $stream->id);
        }
    }

    private function check_transport_errors_in_stream(string|null $transporterrors, object $stream): void
    {
        $outputErrStats = [];

        if (is_null($transporterrors)) {
            $outputErrStats = [
                'status' => 'transporterrors_warning',
                'message' => 'Nepodařilo se získat informaci o transport streamu',
            ];
            (new StoreItemsToCache())->execute(key: 'streamTransportErrors_' . $stream->id, value: $outputErrStats);
        } elseif ($transporterrors != '0') {
            $outputErrStats = [
                'status' => 'transporterrors_warning',
                'message' => 'Zobrazila se TS chyba',
            ];
            (new StoreItemsToCache())->execute(key: 'streamTransportErrors_' . $stream->id, value: $outputErrStats);
        } else {
            (new RemoveItemsFromCache())->execute(key: 'streamTransportErrors_' . $stream->id);
        }
    }

    public function store_to_cache(object $stream, $country, $packets, $pcrbitrate): void
    {
        (new StoreItemsToCache())->execute(key: 'streamTS_' . $stream->id, value: [
            'country' => $country,
            'packets' => $packets,
            'pcrbitrate' => $pcrbitrate,
        ]);
    }
}
