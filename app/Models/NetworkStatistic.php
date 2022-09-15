<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NetworkStatistic extends Model
{
    protected $fillable = [
        'rx', 'tx',
    ];
}
