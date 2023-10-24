<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SlackChannel extends Model
{
    const CHANNEL_ALERT = "channel_alert";
    const SYSTEM_NOTIFICATION = "system_notification";
    const HARDWARE_ALERT = "hardware_alert";

    protected $fillable = [
        'webhook', 'popis'
    ];
}
