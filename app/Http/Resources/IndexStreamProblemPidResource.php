<?php

namespace App\Http\Resources;

use App\Models\Stream;
use Illuminate\Http\Request;
use App\Models\StreamProblemPid;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexStreamProblemPidResource extends JsonResource
{

    public function toArray(Request $request)
    {
        $output = array();
        foreach (Stream::with('problemPids')->get()->toArray() as $stream) {
            if (count($stream['problem_pids']) > 0) {
                $output[] = [
                    'id' => $stream['id'],
                    'nazev' => $stream['nazev'],
                    'status' => $stream['status'],
                    'monitored_at' => $stream['monitored_at'],
                    'problems' => $stream['problem_pids']
                ];
            }
        }

        return count($output);
    }

    protected function countErrors(array $problems)
    {
        $output = array();
        foreach ($problems as $problem) {
            // dd($problem['pid']);
            if (!isset($output[$problem['pid']])) {
                $output[$problem['pid']] = $problem['errors'];
            }

            if ($output[$problem['pid']] == $problem['pid']) {
                $output[$problem['pid']] = $output[$problem['pid']] + $problem['errors'];
            }
        }

        return $output;
    }
}
