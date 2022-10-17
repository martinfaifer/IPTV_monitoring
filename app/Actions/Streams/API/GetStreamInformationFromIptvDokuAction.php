<?php

namespace App\Actions\Streams\API;

use Illuminate\Support\Facades\Http;

class GetStreamInformationFromIptvDokuAction
{
    public $token = '1|O4jmnFJhyc2YZ9NG1J7krY2WTZnTqvfbTzXkykae';

    public function execute(object $stream)
    {
        if (! is_null(config('app.iptv_dokumentace')) || ! is_null(config('app.iptv_dokumentace_token'))) {
            return Http::withToken($this->token)->get(config('app.iptv_dokumentace')."/api/stream/iptvdohled/{$stream->id}")->json();
        }
    }
}
