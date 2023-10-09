<?php

namespace App\Services\StreamDiagnostic\TSDuck;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use App\Actions\Cache\StoreItemsToCache;
use App\Actions\Cache\RemoveItemsFromCache;
use App\Interfaces\DiagnosticAnalyzeInterface;
use App\Events\BroadcastAudioVideoStreamPidsEvent;
use App\Actions\Cache\StoreStreamPidDataFroChartToCache;
use App\Actions\Cache\StoreStreamPidDiscontinuityAction;
use App\Services\StreamDiagnostic\CheckPids\CheckNumberOfErrorsService;

class StreamDiagnosticTsDuckAnalyzePidStreamService implements DiagnosticAnalyzeInterface
{
    public $videoPid = [];

    public $audioPid = [];

    public $ecmPid = [];

    public $emm = [];

    public $videoPidsAgregated = [];

    public $audioPidsAgregated = [];

    public $caPidsAgregated = [];

    public function __construct(Collection $tsDuckCollection, object $stream)
    {
        $this->analyze(tsDuckCollection: $tsDuckCollection, stream: $stream);
    }

    public function analyze(Collection $tsDuckCollection, object $stream): void
    {
        foreach ($tsDuckCollection['pids'] as $collection) {
            if ($collection['video'] == true) {
                $this->videoPid[] = [...$collection];
            }

            if ($collection['audio'] == true) {
                $this->audioPid[] = [...$collection];
            }

            if ($collection['ecm'] == true) {
                $this->ecmPid[] = [...$collection];
            }

            if ($collection['emm'] == true) {
                $this->emm[] = $collection['emm'];
            }
        }

        // $this->store_to_cache(stream: $stream);

        if (!empty($this->videoPid)) {
            $this->collect_video_pids($stream, $this->videoPid);
        }

        if (!empty($this->audioPid)) {
            $this->collect_audio_pids($stream, $this->audioPid);
        }

        // if (!empty($this->ecmPid)) {
        //     $this->collect_ca_pids($stream, $this->ecmPid);
        // }

        // broadcast information about video and audio pids
        BroadcastAudioVideoStreamPidsEvent::dispatch(
            $stream,
            Cache::get('streamVideoPids_' . $stream->id),
            Cache::get('streamAudioPids_' . $stream->id)
        );
    }

    /**
     * funkce pro sběr a uložení informací o AudioPidech
     * hodnoty jsou uloženy v Cache pod klíčem 'streamAudioPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $audiosPids
     * @return void
     */
    private function collect_audio_pids(object $stream, array $audioPids): void
    {
        foreach ($audioPids as $audioPid) {
            if (array_key_exists('id', $audioPid)) {
                $audioPidId = $audioPid['id'];
                $this->audioPidsAgregated[$audioPidId]['pid'] = $audioPidId;
            }

            if (array_key_exists('language', $audioPid)) {
                $this->audioPidsAgregated[$audioPidId]['language'] = $audioPid['language'];
            }

            if (array_key_exists('bitrate', $audioPid)) {
                $this->audioPidsAgregated[$audioPidId]['bitrate'] = $audioPid['bitrate'];
                $this->check_if_audio_bitrate_is_zero($audioPid['bitrate'], $audioPidId, $stream);
                (new StoreStreamPidDataFroChartToCache())->execute(
                    key: 'streamPidBitrate_' . $audioPidId . '_' . $stream->id,
                    value: round($audioPid['bitrate'] / 1048576, 2),
                    pid: $audioPid
                );
            }

            if (array_key_exists('packets', $audioPid)) {
                if (array_key_exists('scrambled', $audioPid['packets'])) {
                    $this->audioPidsAgregated[$audioPidId]['scrambled'] = $audioPid['packets']['scrambled'];
                }

                if (array_key_exists('discontinuities', $audioPid['packets'])) {
                    $this->audioPidsAgregated[$audioPidId]['discontinuities'] = $audioPid['packets']['discontinuities'];
                    (new StoreStreamPidDiscontinuityAction())->execute(
                        key: 'streamDiscontinuityPidErrors_' . $audioPidId . '_' . $stream->id,
                        dicontinuity: $audioPid['packets']['discontinuities']
                    );

                    try {
                        (new CheckNumberOfErrorsService())->check(
                            pid: $audioPidId,
                            pidErrors: $audioPid['packets']['discontinuities'],
                            streamId: $stream->id
                        );
                    } catch (\Throwable $th) {
                        //throw $th;
                    }
                }
            }

            if (array_key_exists('t2mi', $audioPid)) {
                $this->audioPidsAgregated[$audioPidId]['t2mi'] = $audioPid['t2mi'];
            }

            if (array_key_exists('description', $audioPid)) {
                $this->audioPidsAgregated[$audioPidId]['description'] = $audioPid['description'];
            }
        }

        (new StoreItemsToCache())->execute(key: 'streamAudioPids_' . $stream->id, value: $this->audioPidsAgregated);

        // new
        unset($audioPids, $this->audioPidsAgregated);
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
            ? (new RemoveItemsFromCache())->execute(key: 'streamAudioAccess_' . $stream->id)
            : (new StoreItemsToCache())->execute(key: 'streamAudioAccess_' . $stream->id, value: [
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
            ? (new StoreItemsToCache())->execute(key: 'streamAudioBitrate_' . $stream->id, value: [
                'status' => 'no_audio_bitrate',
                'message' => "Audio má nulový datový tok na pidu {$audioPid}",
            ])
            : (new RemoveItemsFromCache())->execute(key: 'streamAudioBitrate_' . $stream->id);
    }

    /**
     * funkce pro sběr a uložení informací o VideoPidech
     * hodnoty jsou uloženy v Cache pod klíčem 'streamVideoPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $videosPids
     * @return void
     */
    private function collect_video_pids(object $stream, array $videoPids): void
    {
        foreach ($videoPids as $videoPid) {
            if (array_key_exists('id', $videoPid)) {
                $videoPidId = $videoPid['id'];
                $this->videoPidsAgregated[$videoPidId]['pid'] = $videoPidId;
            }

            if (array_key_exists('packets', $videoPid)) {
                if (array_key_exists('discontinuities', $videoPid['packets'])) {
                    $this->videoPidsAgregated[$videoPidId]['discontinuities'] = $videoPid['packets']['discontinuities'];
                    (new StoreStreamPidDiscontinuityAction())->execute(
                        key: 'streamDiscontinuityPidErrors_' . $videoPidId . '_' . $stream->id,
                        dicontinuity: $videoPid['packets']['discontinuities']
                    );

                    try {
                        (new CheckNumberOfErrorsService())->check(
                            pid: $videoPidId,
                            pidErrors: $videoPid['packets']['discontinuities'],
                            streamId: $stream->id
                        );
                    } catch (\Throwable $th) {
                        //throw $th;
                    }
                }

                if (array_key_exists('scrambled', $videoPid)) {
                    $this->videoPidsAgregated[$videoPidId]['scrambled'] = $videoPid['scrambled'];
                }
            }

            if (array_key_exists('description', $videoPid)) {
                $this->videoPidsAgregated[$videoPidId]['description'] = $videoPid['description'];
            }

            if (array_key_exists('bitrate', $videoPid)) {
                $this->videoPidsAgregated[$videoPidId]['bitrate'] = $videoPid['bitrate'];
                $this->check_if_video_bitrate_is_zero($videoPid['bitrate'], $videoPidId, $stream);
                // store to cache for chart
                (new StoreStreamPidDataFroChartToCache())->execute(
                    key: 'streamPidBitrate_' . $videoPidId . '_' . $stream->id,
                    value: round($videoPid['bitrate'] / 1048576, 2),
                    pid: $videoPid
                );
            }

            if (array_key_exists('is-scrambled', $videoPid)) {
                $this->videoPidsAgregated[$videoPidId]['is-scrambled'] = $videoPid['is-scrambled'];
            }

            // if (array_key_exists('packets', $videoPid)) {
            //     $this->videoPidsAgregated[$videoPidId]['packets'] = $videoPid['packets'];
            // }

            if (array_key_exists('t2mi', $videoPid)) {
                $this->videoPidsAgregated[$videoPidId]['t2mi'] = $videoPid['t2mi'];
            }

            // if (str_contains($videoPid, 'access')) {
            //     $this->videoPidsAgregated[$videoPidId]['access'] = str_replace('access=', '', $videoPid);
            //     $this->check_if_video_is_dekrypted($this->videoPidsAgregated[$videoPidId]['access'], $videoPidId, $stream);
            // }

            if (array_key_exists('description', $videoPid)) {
                $this->videoPidsAgregated[$videoPidId]['description'] = $videoPid['description'];
            }
        }

        (new StoreItemsToCache())->execute(key: 'streamVideoPids_' . $stream->id, value: $this->videoPidsAgregated);

        // new
        unset($videoPids, $this->videoPidsAgregated);
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
            ? (new RemoveItemsFromCache())->execute(key: 'streamVideoAccess_' . $stream->id)
            : (new StoreItemsToCache())->execute(key: 'streamVideoAccess_' . $stream->id, value: [
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
            ? (new StoreItemsToCache())->execute(key: 'streamVideoBitrate_' . $stream->id, value: [
                'status' => 'no_video_bitrate',
                'message' => "Video má nulový datový tok na pidu {$videoPid}",
            ])
            : (new RemoveItemsFromCache())->execute(key: 'streamVideoBitrate_' . $stream->id);
    }

    /**
     * funkce pro sběr a uložení dat z CA modulu
     * hodnoty jsou uloženy v Cache pod klíčem 'streamCaPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $casPids
     * @return void
     */
    // private function collect_ca_pids(object $stream, array $casPids): void
    // {
    //     foreach ($casPids as $caPids) {
    //         foreach ($caPids as $caPid) {
    //             if (str_contains($caPid, 'pid')) {
    //                 $caPidId = str_replace('pid=', '', $caPid);
    //                 $this->caPidsAgregated[$caPidId]['pid'] = $caPidId;
    //             }

    //             if (str_contains($caPid, 'scrambled')) {
    //                 $this->caPidsAgregated[$caPidId]['scrambled'] = str_replace('scrambled=', '', $caPid);
    //             }

    //             if (str_contains($caPid, 'access')) {
    //                 $this->caPidsAgregated[$caPidId]['access'] = str_replace('access=', '', $caPid);
    //             }

    //             if (str_contains($caPid, 'description')) {
    //                 $this->caPidsAgregated[$caPidId]['description'] = str_replace('description=', '', $caPid);
    //             }

    //             if (str_contains($caPid, 'discontinuities')) {
    //                 $this->caPidsAgregated[$caPidId]['discontinuities'] = str_replace('discontinuities=', '', $caPid);
    //             }
    //         }
    //     }

    //     (new StoreItemsToCache())->execute('streamCaPids_' . $stream->id, $this->caPidsAgregated);
    // }

    /**
     * globální fuknce pro uložení informací o videoPidech AudioPidech a CAPidech do Cache pod klíčem 'streamPids_' . $stream->id
     *
     * @param  object  $stream
     * @param  array  $videoPid
     * @param  array  $audioPid
     * @param  array  $caPid
     * @return void
     */
    public function store_to_cache(object $stream): void
    {
        (new StoreItemsToCache())->execute(key: 'streamPids_' . $stream->id, value: [
            'emm' => $this->emm,
            'ecmPid' => $this->ecmPid,
        ]);
    }
}
