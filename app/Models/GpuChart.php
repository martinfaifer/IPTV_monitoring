<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GpuChart extends Model
{
    protected $fillable = [
        'gpu_id', 'used_memory', 'fan_speed', 'gpu_util'
    ];

    public function gpu(): BelongsTo
    {
        return $this->belongsTo(Gpu::class, 'gpu_id', 'id');
    }
}
