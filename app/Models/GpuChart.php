<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GpuChart extends Model
{
    protected $fillable = [
        'gpu_id', 'used_memory', 'fan_speed', 'gpu_util'
    ];
}
