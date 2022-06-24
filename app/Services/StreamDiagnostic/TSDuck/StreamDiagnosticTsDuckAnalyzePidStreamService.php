<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use App\Actions\Cache\RemoveItemsFromCache;
use App\Actions\Cache\StoreItemsToCache;
use App\Actions\Cache\StoreStreamPidDataFroChartToCache;
use App\Actions\Cache\StoreStreamPidDiscontinuityAction;
use App\Events\BroadcastAudioVideoStreamPidsEvent;
use App\Interfaces\DiagnosticAnalyzeInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

class StreamDiagnosticTsDuckAnalyzePidStreamService implements DiagnosticAnalyzeInterface
{
    public $videoPid = [];

    public $audioPid = [];

    public $caPid = [];

    public $pmtPid = [];

    public $batPid = [];

    public $catPid = [];

    public $patPid = [];

    public $videoPidsAgregated = [];

    public $audioPidsAgregated = [];

    public $caPidsAgregated = [];

    public function __construct(Collection $tsDuckCollection, object $stream)
    {
        $this->analyze($tsDuckCollection, $stream);
    }

    public function analyze(Collection $tsDuckCollection, object $stream): void
    {
        foreach ($tsDuckCollection['pids'] as $collection) {
            $collection = collect($collection);

            if ($collection->contains('video')) {
                $this->videoPid[] = $collection;
            }

            if ($collection->contains('audio')) {
                $this->audioPid[] = $collection;
            }

            if ($collection->contains('ecm')) {
                $this->caPid[] = $collection;
            }

            if ($collection->contains('pmt')) {
                $this->pmtPid[] = $collection;
            }

            if ($collection->contains('description=SDT/BAT')) {
                $this->batPid[] = $collection;
            }

            if ($collection->contains('description=CAT')) {
                $this->catPid[] = $collection;
            }

            if ($collection->contains('description=PAT')) {
                $this->patPid[] = $collection;
            }
        }

        $this->store_to_cache($stream, $this->videoPid, $this->audioPid, $this->caPid);

        if (! empty($this->videoPid)) {
            $this->collect_video_pids($stream, $this->videoPid);
        }

        if (! empty($this->audioPid)) {
            $this->collect_audio_pids($stream, $this->audioPid);
        }

        if (! empty($this->caPid)) {
            $this->collect_ca_pids($stream, $this->caPid);
        }

        // broadcast information about video and audio pids
        BroadcastAudioVideoStreamPidsEvent::dispatch($stream, Cache::get('streamVideoPids_'.$stream->id), Cache::get('streamAudioPids_'.$stream->id));
    }

    /**
     * funkce pro sběr a uložení informací o AudioPidech
     * hodnoty jsou uloženy v Cache pod klíčem 'streamAudioPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $audiosPids
     * @return void
     */
    private function collect_audio_pids(object $stream, array $audiosPids): void
    {
        foreach ($audiosPids as $audioPids) {
            foreach ($audioPids as $audioPid) {
                if (str_contains($audioPid, 'pid')) {
                    $audioPidId = str_replace('pid=', '', $audioPid);
                    $this->audioPidsAgregated[$audioPidId]['pid'] = $audioPidId;
                }

                if (str_contains($audioPid, 'access')) {
                    $this->audioPidsAgregated[$audioPidId]['access'] = str_replace('access=', '', $audioPid);
                    $this->check_if_audio_is_dekrypted($this->audioPidsAgregated[$audioPidId]['access'], $audioPidId, $stream);
                }

                if (str_contains($audioPid, 'language')) {
                    $this->audioPidsAgregated[$audioPidId]['language'] = str_replace('language=', '', $audioPid);
                }

                if (str_contains($audioPid, 'bitrate=')) {
                    $this->audioPidsAgregated[$audioPidId]['bitrate'] = str_replace('bitrate=', '', $audioPid);
                    $this->check_if_audio_bitrate_is_zero($this->audioPidsAgregated[$audioPidId]['bitrate'], $audioPidId, $stream);
                    (new StoreStreamPidDataFroChartToCache())->execute('streamPidBitrate_'.$audioPidId.'_'.$stream->id, $this->audioPidsAgregated[$audioPidId]['bitrate'] / 1048576, $audioPid);
                }

                if (str_contains($audioPid, 'scrambled')) {
                    $this->audioPidsAgregated[$audioPidId]['scrambled'] = str_replace('scrambled=', '', $audioPid);
                }

                if (str_contains($audioPid, 'discontinuities')) {
                    $this->audioPidsAgregated[$audioPidId]['discontinuities'] = str_replace('discontinuities=', '', $audioPid);
                    (new StoreStreamPidDiscontinuityAction())->execute('streamDiscontinuityPidErrors_'.$audioPidId.'_'.$stream->id, $this->audioPidsAgregated[$audioPidId]['discontinuities']);
                }

                if (str_contains($audioPid, 'description')) {
                    $this->audioPidsAgregated[$audioPidId]['description'] = str_replace('description=', '', $audioPid);
                }
            }
        }

        (new StoreItemsToCache())->execute('streamAudioPids_'.$stream->id, $this->audioPidsAgregated);
    }

    /**
     * kontrola dekryptace audio Pidu
     * pokud má audio pid jiný status než clear, jedná se o problém v dekryptaci pidu, chyba je uložena v Cache pod klíčem streamAudioAccess_' . $stream->id
     * pokud je statuc clear, je chyba smazána z cache
     *
     * @param  string  $audioPidAccess
     * @param  string  $audioPid
     * @param  object  $stream
     * @return void
     */
    private function check_if_audio_is_dekrypted(string $audioPidAccess, string $audioPid, object $stream): void
    {
        $audioPidAccess == 'clear'
            ? (new RemoveItemsFromCache())->execute('streamAudioAccess_'.$stream->id)
            : (new StoreItemsToCache())->execute('streamAudioAccess_'.$stream->id, [
                'status' => 'audio_is_not_dekrypted',
                'message' => "Desynchronizace nebo nedekryptace Audia na pidu {$audioPid}",
            ]);
    }

    /**
     * kontrola audio bitratu
     * pokud má audio pid nulový datový tok, jedná se o chybu a je uložen v Cache pod klíčem  streamAudioBitrate_s_$stream->id
     * pokud datový tok je je jiný než nulový, je chyba smazána z cache
     *
     * @param  string  $audioBitrate
     * @param  string  $audioPid
     * @param  object  $stream
     * @return void
     */
    private function check_if_audio_bitrate_is_zero(string $audioBitrate, string $audioPid, object $stream): void
    {
        $audioBitrate == 0
            ? (new StoreItemsToCache())->execute('streamAudioBitrate_'.$stream->id, [
                'status' => 'no_audio_bitrate',
                'message' => "Audio má nulový datový tok na pidu {$audioPid}",
            ])
            : (new RemoveItemsFromCache())->execute('streamAudioBitrate_'.$stream->id);
    }

    /**
     * funkce pro sběr a uložení informací o VideoPidech
     * hodnoty jsou uloženy v Cache pod klíčem 'streamVideoPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $videosPids
     * @return void
     */
    private function collect_video_pids(object $stream, array $videosPids): void
    {
        foreach ($videosPids as $videoPids) {
            foreach ($videoPids as $videoPid) {
                if (str_contains($videoPid, 'pid')) {
                    $videoPidId = str_replace('pid=', '', $videoPid);
                    $this->videoPidsAgregated[$videoPidId]['pid'] = $videoPidId;
                }

                if (str_contains($videoPid, 'discontinuities')) {
                    $this->videoPidsAgregated[$videoPidId]['discontinuities'] = str_replace('discontinuities=', '', $videoPid);
                    (new StoreStreamPidDiscontinuityAction())->execute('streamDiscontinuityPidErrors_'.$videoPidId.'_'.$stream->id, $this->videoPidsAgregated[$videoPidId]['discontinuities']);
                }

                if (str_contains($videoPid, 'description')) {
                    $this->videoPidsAgregated[$videoPidId]['description'] = str_replace('description=', '', $videoPid);
                }

                if (str_contains($videoPid, 'bitrate=')) {
                    $this->videoPidsAgregated[$videoPidId]['bitrate'] = str_replace('bitrate=', '', $videoPid);
                    $this->check_if_video_bitrate_is_zero($this->videoPidsAgregated[$videoPidId]['bitrate'], $videoPid, $stream);
                    // store to cache for chart
                    (new StoreStreamPidDataFroChartToCache())->execute('streamPidBitrate_'.$videoPidId.'_'.$stream->id, $this->videoPidsAgregated[$videoPidId]['bitrate'] / 1048576, $videoPid);
                }

                if (str_contains($videoPid, 'scrambled')) {
                    $this->videoPidsAgregated[$videoPidId]['scrambled'] = str_replace('scrambled=', '', $videoPid);
                }

                if (str_contains($videoPid, 'access')) {
                    $this->videoPidsAgregated[$videoPidId]['access'] = str_replace('access=', '', $videoPid);
                    $this->check_if_video_is_dekrypted($this->videoPidsAgregated[$videoPidId]['access'], $videoPidId, $stream);
                }

                if (str_contains($videoPid, 'description')) {
                    $this->videoPidsAgregated[$videoPidId]['description'] = str_replace('description=', '', $videoPid);
                }
            }
        }

        (new StoreItemsToCache())->execute('streamVideoPids_'.$stream->id, $this->videoPidsAgregated);
    }

    /**
     * kontrola dekryptace video Pidu
     * pokud má video pid jiný status než clear, jedná se o problém v dekryptaci pidu, chyba je uložena v Cache pod klíčem streamVideoAccess_' . $stream->id
     * pokud je statuc clear, je chyba smazána z cache
     *
     * @param  string  $videoPidAccess
     * @param  string  $videoPid
     * @param  object  $stream
     * @return void
     */
    private function check_if_video_is_dekrypted(string $videoPidAccess, string $videoPid, object $stream): void
    {
        $videoPidAccess == 'clear'
            ? (new RemoveItemsFromCache())->execute('streamVideoAccess_'.$stream->id)
            : (new StoreItemsToCache())->execute('streamVideoAccess_'.$stream->id, [
                'status' => 'video_is_not_dekrypted',
                'message' => "Nedekryptuje se video na pidu {$videoPid}",
            ]);
    }

    /**
     * kontrola video bitratu
     * pokud má video pid nulový datový tok, jedná se o chybu a je uložen v Cache pod klíčem  streamVideoBitrate_$stream->id
     * pokud datový tok je je jiný než nulový, je chyba smazána z cache
     *
     * @param  string  $viedoBitrate
     * @param  string  $videoPid
     * @param  object  $stream
     * @return void
     */
    private function check_if_video_bitrate_is_zero(string $viedoBitrate, string $videoPid, object $stream): void
    {
        $viedoBitrate == 0
            ? (new StoreItemsToCache())->execute('streamVideoBitrate_'.$stream->id, [
                'status' => 'no_video_bitrate',
                'message' => "Video má nulový datový tok na pidu {$videoPid}",
            ])
            : (new RemoveItemsFromCache())->execute('streamVideoBitrate_'.$stream->id);
    }

    /**
     * funkce pro sběr a uložení dat z CA modulu
     * hodnoty jsou uloženy v Cache pod klíčem 'streamCaPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $casPids
     * @return void
     */
    private function collect_ca_pids(object $stream, array $casPids): void
    {
        foreach ($casPids as $caPids) {
            foreach ($caPids as $caPid) {
                if (str_contains($caPid, 'pid')) {
                    $caPidId = str_replace('pid=', '', $caPid);
                    $this->caPidsAgregated[$caPidId]['pid'] = $caPidId;
                }

                if (str_contains($caPid, 'scrambled')) {
                    $this->caPidsAgregated[$caPidId]['scrambled'] = str_replace('scrambled=', '', $caPid);
                }

                if (str_contains($caPid, 'access')) {
                    $this->caPidsAgregated[$caPidId]['access'] = str_replace('access=', '', $caPid);
                }

                if (str_contains($caPid, 'description')) {
                    $this->caPidsAgregated[$caPidId]['description'] = str_replace('description=', '', $caPid);
                }

                if (str_contains($caPid, 'discontinuities')) {
                    $this->caPidsAgregated[$caPidId]['discontinuities'] = str_replace('discontinuities=', '', $caPid);
                }
            }
        }

        (new StoreItemsToCache())->execute('streamCaPids_'.$stream->id, $this->caPidsAgregated);
    }

    /**
     * globální fuknce pro uložení informací o videoPidech AudioPidech a CAPidech do Cache pod klíčem 'streamPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $videoPid
     * @param  array  $audioPid
     * @param  array  $caPid
     * @return void
     */
    public function store_to_cache(object $stream, array $videoPid, array $audioPid, array $caPid): void
    {
        (new StoreItemsToCache())->execute('streamPids_'.$stream->id, [
            'pmtPid' => $this->pmtPid,
            'batPid' => $this->batPid,
            'catPid' => $this->catPid,
            'patPid' => $this->patPid,
            'caPid' => $caPid,
        ]);
    }
}
