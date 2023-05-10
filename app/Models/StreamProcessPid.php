<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StreamProcessPid extends Model
{
    protected $fillable = [
        'diagnostic_pid',
        'ffmpeg_pid',
        'stream_id'
    ];

    public function stream(): BelongsTo
    {
        return $this->belongsTo(Stream::class, 'stream_id', 'id');
    }
}
