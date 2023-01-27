<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StreamHistoryStatus extends Model
{
    protected $fillable = [
        'stream_id',
        'status'
    ];

    public function stream(): BelongsTo
    {
        return $this->belongsTo(Stream::class, 'id');
    }

    protected $casts = [
        'created_at' => 'datetime:d.m. H:i',
    ];
}
