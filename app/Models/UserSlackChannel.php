<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class UserSlackChannel extends Model
{
    protected $fillable = [
        'user_id',
        'slack_channel_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function channel(): HasOne
    {
        return $this->hasOne(SlackChannel::class, 'id', 'slack_channel_id');
    }
}
