<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gpu extends Model
{
    protected $fillable = [
        'product_name',
        'serial'
    ];
}
