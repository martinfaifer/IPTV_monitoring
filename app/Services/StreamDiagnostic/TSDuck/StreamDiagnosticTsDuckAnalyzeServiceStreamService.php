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
        foreach ($tsDuckCollection['service'] as $collection) {
            if (str_contains($collection, 'tsid')) {
                $this->tsid = str_replace('tsid=', '', $collection);
            }

            if (str_contains($collection, 'pmtpid')) {
                $this->pmtpid = str_replace('pmtpid=', '', $collection);
            }

            if (str_contains($collection, 'pcrpid')) {
                $this->pcrpid = str_replace('pcrpid=', '', $collection);
            }

            if (str_contains($collection, 'provider')) {
                $this->provider = str_replace('provider=', '', $collection);
            }

            if (str_contains($collection, 'name')) {
                $this->name = str_replace('name=', '', $collection);
            }
        }

        $this->store_to_cache($stream, $this->tsid, $this->pmtpid, $this->pcrpid, $this->provider, $this->name);
    }

    public function store_to_cache(object $stream, $tsid, $pmtpid, $pcrpid, $provider, $name): void
    {
        (new StoreItemsToCache())->execute('streamService_'.$stream->id, [
            'tsid' => $tsid,
            'pmtpid' => $pmtpid,
            'pcrpid' => $pcrpid,
            'provider' => $provider,
            'name' => $name,
        ]);
    }
}
