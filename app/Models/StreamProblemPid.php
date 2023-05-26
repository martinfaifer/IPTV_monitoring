<?php

namespace App\Models;


use App\Models\Stream;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StreamProblemPid extends Model
{
    protected $fillable = [
        'stream_id', 'pid', 'errors'
    ];

    public function stream(): BelongsTo
    {
        return $this->belongsTo(Stream::class, 'stream_id', 'id');
    }
}
