<?php

namespace App\Http\Resources;

use App\Models\ProblemPts;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PtsProblemStreamsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return ProblemPts::with('stream')->get()->toArray();
    }
}
