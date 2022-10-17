<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserWebhook extends Model
{
    protected $fillable = [
        'user_id', 'webhook_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function webhooks(): HasMany
    {
        return $this->hasMany(Webhook::class, 'id', 'webhook_id');
    }
}
