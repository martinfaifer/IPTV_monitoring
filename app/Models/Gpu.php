<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gpu extends Model
{
    protected $fillable = [
        'product_name',
        'serial',
        'status'
    ];

    public function gpu_chart(): HasMany
    {
        return $this->hasMany(GpuChart::class, 'gpu_id', 'id');
    }
}
