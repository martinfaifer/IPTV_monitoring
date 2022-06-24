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
        foreach ($tsDuckCollection['ts'] as $collection) {
            if (str_contains($collection, 'invalidsyncs')) {
                $this->check_invalid_sync_in_stream(str_replace('invalidsyncs=', '', $collection), $stream);
            }

            if (str_contains($collection, 'transporterrors=')) {
                $this->check_transport_errors_in_stream(str_replace('transporterrors=', '', $collection), $stream);
            }

            if (str_contains($collection, 'country=')) {
                $this->country = str_replace('country=', '', $collection);
            }

            if (str_contains($collection, 'packets=')) {
                $this->packets = str_replace('packets=', '', $collection);
            }

            if (str_contains($collection, 'pcrbitrate=')) {
                $this->pcrbitrate = str_replace('pcrbitrate=', '', $collection);
            }
        }

        $this->store_to_cache($stream, $this->country, $this->packets, $this->pcrbitrate);
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
            (new StoreItemsToCache())->execute('streamInvalidSync_'.$stream->id, $outputErrStats);
            exit();
        }

        if ($invalidsyncs != '0') {
            $outputErrStats = [
                'status' => 'invalidSync_warning',
                'message' => 'Desynchronizace Audia / videa',
            ];
            (new StoreItemsToCache())->execute('streamInvalidSync_'.$stream->id, $outputErrStats);
            exit();
        }
        (new RemoveItemsFromCache())->execute('streamInvalidSync_'.$stream->id);
    }

    private function check_transport_errors_in_stream(string|null $transporterrors, object $stream): void
    {
        $outputErrStats = [];

        if (is_null($transporterrors)) {
            $outputErrStats = [
                'status' => 'transporterrors_warning',
                'message' => 'Nepodařilo se získat informaci o transport streamu',
            ];
            (new StoreItemsToCache())->execute('streamTransportErrors_'.$stream->id, $outputErrStats);
            exit();
        }

        if ($transporterrors != '0') {
            $outputErrStats = [
                'status' => 'transporterrors_warning',
                'message' => 'Zobrazila se TS chyba',
            ];
            (new StoreItemsToCache())->execute('streamTransportErrors_'.$stream->id, $outputErrStats);
            exit();
        }

        (new RemoveItemsFromCache())->execute('streamTransportErrors_'.$stream->id);
    }

    public function store_to_cache(object $stream, $country, $packets, $pcrbitrate): void
    {
        (new StoreItemsToCache())->execute('streamTS_'.$stream->id, [
            'country' => $country,
            'packets' => $packets,
            'pcrbitrate' => $pcrbitrate,
        ]);
    }
}
