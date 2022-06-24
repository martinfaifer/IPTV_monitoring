<?php

namespace App\Actions\Streams\API;

use Illuminate\Support\Facades\Http;

class GetStreamInformationFromIptvDokuAction
{
    public $token = '1|O4jmnFJhyc2YZ9NG1J7krY2WTZnTqvfbTzXkykae';

    public function execute(object $stream)
    {
        return Http::withToken($this->token)->get("https://wwww.iptvdoku_3.test/api/stream/iptvdohled/{$stream->id}")->json();
    }
}
