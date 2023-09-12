<?php

namespace App\Http\Resources;

use App\Models\ProblemPts;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class PtsProblemStreamsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if (!Cache::has('pts_problem_streams')) {
            Cache::put('pts_problem_streams', ProblemPts::with('stream')->get()->toArray(), 600);
        }

        return Cache::get('pts_problem_streams');
    }
}
