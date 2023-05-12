<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Stream extends Model
{
    public const STATUS_WAITING = 'waiting';

    public const STATUS_MONITORING = 'monitoring';

    public const STATUS_STARTING = 'starting';

    public const STATUS_STOPPED = 'stopped';

    public const STATUS_CAN_NOT_START = 'can_not_start';

    public const STATUS_CRASH = 'crash';

    public const STATUS_ISSUE = 'issue';

    public const STATUS_DELETED = 'deleted';

    protected $fillable = [
        'nazev',
        'stream_url',
        'status',
        'monitored_at',
    ];

    protected $casts = [
        'monitored_at' => 'datetime',
    ];

    public function history(): HasMany
    {
        return $this->hasMany(StreamHistoryStatus::class, 'stream_id', 'id')->select(['id', 'status', 'created_at'])->take(10);
    }

    public function processes(): BelongsTo
    {
        return $this->belongsTo(StreamProcessPid::class, 'id', 'stream_id');
    }

    public static function scopeIsNotMonitored(Builder $query)
    {
        $query
            ->where('status', Stream::STATUS_WAITING)
            // ->orWhere('status', Stream::STATUS_CRASH)
            ->with('processes');
    }

    public static function scopeIsMonitoring(Builder $query)
    {
        $query->where('status', Stream::STATUS_MONITORING);
    }
}
