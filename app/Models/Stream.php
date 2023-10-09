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
        'check_pts',
        'play_video'
    ];

    protected $casts = [
        'monitored_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'date:d.m. H:m',
        'check_pts' => 'boolean',
        'play_video' => 'boolean'
    ];

    public function history(): HasMany
    {
        return $this->hasMany(StreamHistoryStatus::class, 'stream_id', 'id')->select(['id', 'status', 'created_at'])->orderBy('created_at', 'DESC')->take(10);
    }

    public function processes(): BelongsTo
    {
        return $this->belongsTo(StreamProcessPid::class, 'id', 'stream_id');
    }

    public function problemPids(): HasMany
    {
        return $this->hasMany(StreamProblemPid::class, 'stream_id', 'id');
    }

    public function problemPts(): HasOne
    {
        return $this->hasOne(ProblemPts::class, 'stream_id', 'id');
    }

    public function sendedAlert(): HasOne
    {
        return $this->hasOne(SendedStreamEmail::class, 'stream_id', 'id');
    }

    public function sheduler(): HasMany
    {
        return $this->hasMany(StreamSheduler::class, 'stream_id', 'id');
    }

    public function videoPid(): HasOne
    {
        return $this->hasOne(VideoPid::class, 'stream_id', 'id');
    }

    public static function scopeIsNotMonitored(Builder $query)
    {
        $query
            ->where('status', Stream::STATUS_WAITING)
            ->with('processes');
    }

    public static function scopeIsMonitoring(Builder $query)
    {
        $query->where('status', Stream::STATUS_MONITORING);
    }

    public function scopeCheckPts(Builder $query)
    {
        $query->where('status', Stream::STATUS_MONITORING)->where('check_pts', true);
    }

    public function scopePlayVideo(Builder $query)
    {
        $query->where('play_video', true);
    }
}
