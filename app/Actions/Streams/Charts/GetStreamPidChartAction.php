<?php

namespace App\Actions\Streams\Charts;

use App\Models\StreamPtsHistory;
use Illuminate\Support\Facades\Cache;

class GetStreamPidChartAction
{
    public $xaxis = [];

    public $seriesData = [];

    public $output = [];

    public function execute(object $stream, string $pid)
    {
        if ($pid == "iframe") {
            $iframes = StreamPtsHistory::where('stream_id', $stream->id)->get();

            foreach ($iframes as $iframe) {
                $this->xaxis[] = $iframe->created_at;
                $this->seriesData[] = $iframe->pts;
            }

            if (!empty($this->xaxis)) {
                $this->output = [
                    [
                        'name' => 'Hodnota I frame',
                        'data' => $this->seriesData,
                    ],
                ];
            }
        } else {

            if (Cache::has('streamPidBitrate_' . $pid . '_' . $stream->id)) {
                $cachedData = Cache::get('streamPidBitrate_' . $pid . '_' . $stream->id);

                foreach ($cachedData as $valueData) {
                    $this->xaxis[] = $valueData['created_at'];
                    $this->seriesData[] = $valueData['value'];
                }

                if (!empty($this->xaxis)) {
                    $this->output = [
                        [
                            'name' => 'Datový tok v Mbps',
                            'data' => $this->seriesData,
                        ],
                    ];
                }
            }
        }



        return [
            'xaxis' => $this->xaxis,
            'seriesData' => $this->output,
        ];
    }
}
