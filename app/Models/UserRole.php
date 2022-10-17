<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $fillable = [
        'role_name',
    ];

    const IsAdmin = 1;

    const IsEditor = 2;

    const IsView = 3;
}
