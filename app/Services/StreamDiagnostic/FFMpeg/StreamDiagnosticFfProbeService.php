<?php

namespace App\Services\StreamDiagnostic\FFMpeg;

use App\Actions\Streams\Analyze\CheckAudioVideoSynchronizationAction;
use App\Actions\Streams\Analyze\FfProbeAnalyzeAction;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\LazyCollection;

class StreamDiagnosticFfProbeService
{
    public function __construct(object $stream)
    {
        $lock = Cache::lock('runningFfprobe_' . $stream->id, 10);
        if ($lock->get()) {
            $this->monitoring($stream);
        }
    }

    public function monitoring(object $stream)
    {
        $niceResult = [];
        $ffprobeOutput = (new FfProbeAnalyzeAction())->execute($stream);
        if (!empty($ffprobeOutput)) {

            Cache::put($stream->id . "_ffprobe", $this->tree_create($ffprobeOutput), 120);

            // $ffprobeLazyCollectionData = LazyCollection::make(function () use ($ffprobeOutput) {
            //     foreach ($ffprobeOutput as $ffprobeData) {
            //         yield $ffprobeData;
            //     }
            // });
            // // (new CheckAudioVideoSynchronizationAction())->execute();
            // new StreamDiagnosticFfProbeFillTsDuckPidData($ffprobeLazyCollectionData, $stream);
        }
    }


    protected function tree_create(array $ffprobe): array
    {
        $programsData = array();
        $videoStreams = array();
        $audioStreams = array();

        foreach ($ffprobe["programs"] as $programs) {
            if (array_key_exists('program_id', $programs)) {
                data_set($programsData[], 'name', "program_id: " . $programs["program_id"]);
            }

            if (array_key_exists('program_num', $programs)) {
                data_set($programsData[], 'name', "program_num: " . $programs["program_num"]);
            }
            if (array_key_exists('nb_streams', $programs)) {
                data_set($programsData[], 'name', "nb_streams: " . $programs["nb_streams"]);
            }
            if (array_key_exists('pmt_pid', $programs)) {
                data_set($programsData[], 'name', "pmt_pid: " . $programs["pmt_pid"]);
            }
            if (array_key_exists('pcr_pid', $programs)) {
                data_set($programsData[], 'name', "pcr_pid: " . $programs["pcr_pid"]);
            }
            if (array_key_exists("tags", $programs) && array_key_exists("service_name",  $programs["tags"])) {
                data_set($programsData[], 'name', "service_name: " . $programs["tags"]["service_name"]);
            }
            if (array_key_exists("tags", $programs) && array_key_exists("service_provider",  $programs["tags"])) {
                data_set($programsData[], 'name', "service_provider: " . $programs["tags"]["service_provider"]);
            }
        }

        try {
            foreach ($ffprobe["programs"][0]["streams"] as $streams) {
                if (array_key_exists("codec_type", $streams)) {
                    // nalezeni audia
                    if ($streams["codec_type"] == "audio") {
                        if (array_key_exists("index", $streams)) {
                            $audioStreams['id'] =
                            data_set($audioStreams[], 'name', "index: " . $streams["index"]);
                        }
                        if (array_key_exists("codec_name", $streams)) {
                            data_set($audioStreams[], 'name', "codec_name: " . $streams["codec_name"]);
                        }
                        if (array_key_exists("codec_long_name", $streams)) {
                            data_set($audioStreams[], 'name', "codec_long_name: " . $streams["codec_long_name"]);
                        }
                        if (array_key_exists("profile", $streams)) {
                            data_set($audioStreams[], 'name', "profile: " . $streams["profile"]);
                        }
                        if (array_key_exists('codec_type', $streams)) {
                            data_set($audioStreams[], 'name', "codec_type: " . $streams["codec_type"]);
                        }
                        if (array_key_exists('codec_time_base', $streams)) {
                            data_set($audioStreams[], 'name', "codec_time_base: " . $streams["codec_time_base"]);
                        }
                        if (array_key_exists('codec_tag_string', $streams)) {
                            data_set($audioStreams[], 'name', "codec_tag_string: " . $streams["codec_tag_string"]);
                        }
                        if (array_key_exists('codec_tag', $streams)) {
                            data_set($audioStreams[], 'name', "codec_tag: " . $streams["codec_tag"]);
                        }
                        if (array_key_exists('sample_fmt', $streams)) {
                            data_set($audioStreams[], 'name', "sample_fmt: " . $streams["sample_fmt"]);
                        }
                        if (array_key_exists('sample_rate', $streams)) {
                            data_set($audioStreams[], 'name', "sample_rate: " . $streams["sample_rate"]);
                        }
                        if (array_key_exists('channels', $streams)) {
                            data_set($audioStreams[], 'name', "channels: " . $streams["channels"]);
                        }
                        if (array_key_exists('channel_layout', $streams)) {
                            data_set($audioStreams[], 'name', "channel_layout: " . $streams["channel_layout"]);
                        }
                        if (array_key_exists('bits_per_sample', $streams)) {
                            data_set($audioStreams[], 'name', "bits_per_sample: " . $streams["bits_per_sample"]);
                        }
                        if (array_key_exists('id', $streams)) {
                            data_set($audioStreams[], 'name', "id: " . $streams["id"]);
                        }
                        if (array_key_exists('r_frame_rate', $streams)) {
                            data_set($audioStreams[], 'name', "r_frame_rate: " . $streams["r_frame_rate"]);
                        }
                        if (array_key_exists('avg_frame_rate', $streams)) {
                            data_set($audioStreams[], 'name', "avg_frame_rate: " . $streams["avg_frame_rate"]);
                        }
                        if (array_key_exists('time_base', $streams)) {
                            data_set($audioStreams[], 'name', "time_base: " . $streams["time_base"]);
                        }
                        if (array_key_exists('start_pts', $streams)) {
                            data_set($audioStreams[], 'name', "start_pts: " . $streams["start_pts"]);
                        }
                        if (array_key_exists('start_time', $streams)) {
                            data_set($audioStreams[], 'name', "start_time: " . $streams["start_time"]);
                        }
                        if (array_key_exists('bit_rate', $streams)) {
                            data_set($audioStreams[], 'name', "bit_rate: " . $streams["bit_rate"]);
                        }

                        if (array_key_exists("tags", $streams) && array_key_exists("language",  $streams["tags"])) {
                            data_set($audioStreams[], 'name', "lang: " . $streams["tags"]["language"]);
                        }
                    }
                    if ($streams["codec_type"] == "video") {
                        if (array_key_exists("index", $streams)) {
                            data_set($videoStreams[], 'name', "index: " . $streams["index"]);
                        }
                        if (array_key_exists("codec_name", $streams)) {
                            data_set($videoStreams[], 'name', "codec_name: " . $streams["codec_name"]);
                        }
                        if (array_key_exists("codec_long_name", $streams)) {
                            data_set($videoStreams[], 'name', "codec_long_name: " . $streams["codec_long_name"]);
                        }
                        if (array_key_exists("profile", $streams)) {
                            data_set($videoStreams[], 'name', "profile: " . $streams["profile"]);
                        }
                        if (array_key_exists("codec_type", $streams)) {
                            data_set($videoStreams[], 'name', "codec_type: " . $streams["codec_type"]);
                        }
                        if (array_key_exists("codec_time_base", $streams)) {
                            data_set($videoStreams[], 'name', "codec_time_base: " . $streams["codec_time_base"]);
                        }
                        if (array_key_exists("codec_tag_string", $streams)) {
                            data_set($videoStreams[], 'name', "codec_tag_string: " . $streams["codec_tag_string"]);
                        }
                        if (array_key_exists("codec_tag", $streams)) {
                            data_set($videoStreams[], 'name', "codec_tag: " . $streams["codec_tag"]);
                        }
                        if (array_key_exists("width", $streams)) {
                            data_set($videoStreams[], 'name', "width: " . $streams["width"]);
                        }
                        if (array_key_exists("height", $streams)) {
                            data_set($videoStreams[], 'name', "height: " . $streams["height"]);
                        }
                        if (array_key_exists("coded_width", $streams)) {
                            data_set($videoStreams[], 'name', "coded_width: " . $streams["coded_width"]);
                        }
                        if (array_key_exists("coded_height", $streams)) {
                            data_set($videoStreams[], 'name', "coded_height: " . $streams["coded_height"]);
                        }
                        if (array_key_exists("has_b_frames", $streams)) {
                            data_set($videoStreams[], 'name', "has_b_frames: " . $streams["has_b_frames"]);
                        }
                        if (array_key_exists("level", $streams)) {
                            data_set($videoStreams[], 'name', "level: " . $streams["level"]);
                        }
                        if (array_key_exists("chroma_location", $streams)) {
                            data_set($videoStreams[], 'name', "chroma_location: " . $streams["chroma_location"]);
                        }
                        if (array_key_exists("refs", $streams)) {
                            data_set($videoStreams[], 'name', "refs: " . $streams["refs"]);
                        }
                        if (array_key_exists("is_avc", $streams)) {
                            data_set($videoStreams[], 'name', "is_avc: " . $streams["is_avc"]);
                        }
                        if (array_key_exists("nal_length_size", $streams)) {
                            data_set($videoStreams[], 'name', "nal_length_size: " . $streams["nal_length_size"]);
                        }
                        if (array_key_exists("id", $streams)) {
                            data_set($videoStreams[], 'name', "id: " . $streams["id"]);
                        }
                        if (array_key_exists("r_frame_rate", $streams)) {
                            data_set($videoStreams[], 'name', "r_frame_rate: " . $streams["r_frame_rate"]);
                        }
                    }
                }
            }
        } catch (\Throwable $th) {
            //throw $th;
        }

        $output[] = array(
            'id' => "1",
            'name' => "Programs",
            'children' => $programsData,
            'file' => 'mdi-television-guide',
        );

        $output[] = array(
            'id' => "2",
            'name' => "Streams",
            'file' => 'mdi-television',
            'children' => array(
                array(
                    'id' => "3",
                    'name' => "Audio",
                    'children' => $audioStreams,
                    'file' => 'mdi-music-note',
                ),
                array(
                    'id' => "4",
                    'name' => "Video",
                    'children' => $videoStreams,
                    'file' => 'mdi-video',
                )
            )

        );

        return $output;
    }
}
