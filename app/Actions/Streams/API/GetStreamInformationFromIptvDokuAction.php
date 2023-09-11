<?php

namespace App\Actions\Streams\API;

use Illuminate\Support\Facades\Http;

class GetStreamInformationFromIptvDokuAction
{

    public function execute(object $stream)
    {
        if (is_null(config('app.iptv_dokumentace_username')) || is_null(config('app.iptv_dokumentace_password'))) {
            return [];
        }
        // dd(config('app.iptv_dokumentace'), config('app.iptv_dokumentace_username'), config('app.iptv_dokumentace_password'));
        $url = explode(":",  $stream->stream_url);
        $response = Http::withBasicAuth(config('app.iptv_dokumentace_username'), config('app.iptv_dokumentace_password'))
            ->get(config('app.iptv_dokumentace') . "/api/v2/channels/" .  $url[0]);

        return $response->json();
    }
}
