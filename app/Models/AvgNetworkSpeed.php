<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AvgNetworkSpeed extends Model
{
    protected $fillable = [
        'tx', 'rx', 'avg_time'
    ];
}
