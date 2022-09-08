<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StreamsHistoryStatus extends Model
{
    protected $fillable = [
        'active', 'stoped', 'problem', 'waiting'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i',
    ];
}
