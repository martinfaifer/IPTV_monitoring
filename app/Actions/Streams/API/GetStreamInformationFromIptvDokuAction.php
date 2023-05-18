<?php

namespace App\Actions\Streams\API;

use Illuminate\Support\Facades\Http;

class GetStreamInformationFromIptvDokuAction
{

    public function execute(object $stream)
    {
        // if (! is_null(config('app.iptv_dokumentace')) || ! is_null(config('app.iptv_dokumentace_token'))) {
        //     return Http::withToken($this->token)->get(config('app.iptv_dokumentace')."/api/stream/iptvdohled/{$stream->id}")->json();
        // }
        // return $stream;
        if (is_null(config('app.iptv_dokumentace_username')) || is_null(config('app.iptv_dokumentace_password'))) {
            return [];
        }
        $url = explode(":",  $stream->stream_url);
        return Http::withBasicAuth(config('app.iptv_dokumentace_username'), config('app.iptv_dokumentace_password'))
            ->get(config('app.iptv_dokumentace') . "/api/v2/channels/" .  $url[0])->json();
    }
}
