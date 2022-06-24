<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Webhook extends Model
{
    protected $fillable = [
        'description', 'uri', 'secret', 'webhook_send_option_id',
    ];

    public function webhook_send_option()
    {
        return $this->belongsTo(WebhookSendOption::class, 'webhook_send_option_id', 'id');
    }
}
