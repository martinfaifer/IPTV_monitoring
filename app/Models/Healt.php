<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Healt extends Model
{
    protected $table = "health_check_result_history_items";

    public static function scopeByName(Builder $query, string $checkName)
    {
        $query->where('check_name', $checkName)->limit('30')->select('id', 'short_summary', 'created_at')
            ->orderByDesc('id');
    }

    public static function scopeGetLastByName(Builder $query, string $checkName)
    {
        $query->where('check_name', $checkName);
    }
}
