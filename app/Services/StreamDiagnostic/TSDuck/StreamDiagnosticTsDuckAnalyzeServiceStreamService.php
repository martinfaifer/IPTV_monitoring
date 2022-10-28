<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Actions\Cache\StoreItemsToCache;
use App\Interfaces\DiagnosticAnalyzeInterface;
use Illuminate\Support\Collection;

class StreamDiagnosticTsDuckAnalyzeServiceStreamService implements DiagnosticAnalyzeInterface
{
    public $tsid = null;

    public $pmtpid = null;

    public $pcrpid = null;

    public $provider = null;

    public $name = null;

    public function __construct(Collection $tsDuckCollection, object $stream)
    {
        $this->analyze(tsDuckCollection: $tsDuckCollection, stream: $stream);
    }

    public function analyze(Collection $tsDuckCollection, object $stream): void
    {
        foreach ($tsDuckCollection as $collection) {
            if (array_key_exists('tsid', $collection[0])) {
                $this->tsid = $collection[0]['tsid'];
            }

            if (array_key_exists('pmt-pid', $collection[0])) {
                $this->pmtpid = $collection[0]['pmt-pid'];
            }

            if (array_key_exists('pcr-pid', $collection[0])) {
                $this->pcrpid = $collection[0]['pcr-pid'];
            }

            if (array_key_exists('provider', $collection[0])) {
                $this->provider = $collection[0]['provider'];
            }

            if (array_key_exists('type-name', $collection[0])) {
                $this->name = $collection[0]['type-name'];
            }
        }

        $this->store_to_cache(
            stream: $stream,
            tsid: $this->tsid,
            pmtpid: $this->pmtpid,
            pcrpid: $this->pcrpid,
            provider: $this->provider,
            name: $this->name
        );
    }

    public function store_to_cache(object $stream, $tsid, $pmtpid, $pcrpid, $provider, $name): void
    {
        (new StoreItemsToCache())->execute(key: 'streamService_' . $stream->id, value: [
            'tsid' => $tsid,
            'pmtpid' => $pmtpid,
            'pcrpid' => $pcrpid,
            'provider' => $provider,
            'name' => $name,
        ]);
    }
}
