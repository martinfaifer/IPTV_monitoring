<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StreamSheduler extends Model
{
    protected $fillable = [
        'stream_id', 'is_daily', 'start_time', 'end_time'
    ];

    protected $casts = [
        'is_daily' => 'boolean',
    ];

    public function stream(): BelongsTo
    {
        return $this->belongsTo(Stream::class, 'stream_id', 'id');
    }
}
