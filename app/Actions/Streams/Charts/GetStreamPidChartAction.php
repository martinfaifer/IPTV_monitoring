<?php

namespace App\Actions\Streams\Charts;

use Illuminate\Support\Facades\Cache;

class GetStreamPidChartAction
{
    public $xaxis = [];

    public $seriesData = [];

    public $output = [];

    public function execute(object $stream, int $pid)
    {
        if (Cache::has('streamPidBitrate_'.$pid.'_'.$stream->id)) {
            $cachedData = Cache::get('streamPidBitrate_'.$pid.'_'.$stream->id);

            foreach ($cachedData as $valueData) {
                $this->xaxis[] = $valueData['created_at'];
                $this->seriesData[] = $valueData['value'];
            }

            if (! empty($this->xaxis)) {
                $this->output = [
                    [
                        'name' => 'Datový tok v Mbps',
                        'data' => $this->seriesData,
                    ],
                ];
            }
        }

        return [
            'xaxis' => $this->xaxis,
            'seriesData' => $this->output,
        ];
    }
}
