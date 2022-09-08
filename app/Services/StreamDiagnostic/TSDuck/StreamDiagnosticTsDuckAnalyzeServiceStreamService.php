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
        $this->analyze($tsDuckCollection, $stream);
    }

    public function analyze(Collection $tsDuckCollection, object $stream): void
    {
        foreach ($tsDuckCollection as $collection) {

            if (array_key_exists("tsid", $collection)) {
                $this->tsid = $collection['tsid'];
            }

            if (array_key_exists("pmt-pid", $collection)) {
                $this->pmtpid = $collection['pmt-pid'];
            }

            // pcr-pid
            if (array_key_exists("pcr-pid", $collection)) {
                $this->pcrpid = $collection['pcr-pid'];
            }

            if (array_key_exists("provider", $collection)) {
                $this->provider = $collection['provider'];
            }

            if (array_key_exists("type-name", $collection)) {
                $this->name = $collection['type-name'];
            }
        }

        $this->store_to_cache($stream, $this->tsid, $this->pmtpid, $this->pcrpid, $this->provider, $this->name);
    }

    public function store_to_cache(object $stream, $tsid, $pmtpid, $pcrpid, $provider, $name): void
    {
        (new StoreItemsToCache())->execute('streamService_' . $stream->id, [
            'tsid' => $tsid,
            'pmtpid' => $pmtpid,
            'pcrpid' => $pcrpid,
            'provider' => $provider,
            'name' => $name,
        ]);
    }
}
