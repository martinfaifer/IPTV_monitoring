<?php

namespace App\Actions\Api\Weather;

use App\Events\BroadcastWweatherAlertEvent;
use Illuminate\Support\Facades\Http;

class GetWeatherAction
{
    public array $translatedDescriptions = [
        "thunderstorm with light rain" => "bouřka se slabým deštěm",
        "thunderstorm with rain" =>  "bouřka s deštěm",
        "thunderstorm with heavy rain" => "bouřka se silným deštěm",
        "light thunderstorm" => "slabá bouřka",
        "thunderstorm" => "bouřka",
        "heavy thunderstorm" => "silná bouřka",
        "ragged thunderstorm" => "velmi silná bouřka",
        "thunderstorm with light drizzle" => "bouřka se slabým mrholením",
        "thunderstorm with drizzle" => "bouřka s mrholením",
        "thunderstorm with heavy drizzle" => "bouřka se silným mrholením",

        "light intensity drizzle" => "lehké mrholení",
        "drizzle" => "mrholení",
        "heavy intensity drizzle" => "silné mrholení",
        "light intensity drizzle rain" => "lehké mrholení",
        "drizzle rain" => "mrholící déšť",
        "heavy intensity drizzle rain" => "silné mrholení",
        "shower rain and drizzle" => "déšť s mrholením",
        "heavy shower rain and drizzle" => "silná přháňka",
        "shower drizzle" => "silné mrholení",

        "light rain" => "mírný déšť",
        "moderate rain" => "střední déšť",
        "heavy intensity rain" => "silný déšť",
        "very heavy rain" => "velmi silný déšť",
        "extreme rain" => "extrémní déšť",
        "freezing rain" => "mrznoucí déšť",
        "light intensity shower rain" => "míná přeháňka",
        "shower rain" => "přívalový déšť",
        "heavy intensity shower rain" => "silný přívalový déšť",
        "ragged shower rain" => "velmi silný přívalový déšť",

        "light snow" => "mirné sněžení",
        "snow" => "sněžení",
        "heavy snow" => "silné sněžení",
        "sleet" => "plískanice",
        "light shower sleet" => "mirný déšť se sněhem",
        "shower sleet" => "déšť se sněhem",
        "light rain and snow" => "mírný déšť se sněhem",
        "rain and snow" => "déšť se sněhem",
        "light shower snow" => "mírný déšť se sněhem",
        "shower snow" => "déšť se sněhem",
        "heavy shower snow" => "silný déšť se sněhem",

        "mist" => "mlha",
        "smoke" => "kouř",
        "haze" => "opar",
        "sand/dust whirls" => "pískové / prachové víry",
        "fog" => "mlha",
        "sand" => "písek",
        "dust" => "prach",
        "volcanic ash" => "sopečný prach",
        "squalls" => "bouře",
        "tornado" => "tornádo",

        "clear sky" => "slunečno",

        "few clouds" => "nízá oblačnost",
        "scattered clouds" => "rozptýlená oblačnost",
        "broken clouds" => "rozrahaná oblačnost",
        "overcast clouds" => "zataženo"
    ];

    public function execute()
    {
        $weatherResponse = Http::withBasicAuth(config('app.iptv_dokumentace_username'), config('app.iptv_dokumentace_password'))
            ->get(config('app.iptv_dokumentace') . "/api/v2/weather")->json();

        $weatherResponse["weather"]["description_cs"] = $this->translate($weatherResponse["weather"][0]['description']);
        $weatherResponse['weather']['isAlert'] = $this->can_be_alert($weatherResponse["weather"][0]['main']);

        BroadcastWweatherAlertEvent::dispatch($weatherResponse);
        return $weatherResponse;
    }

    public function translate(string $description): string
    {
        return $this->translatedDescriptions[$description];
    }

    public function can_be_alert(string $mainWeather): bool
    {
        if ($mainWeather == "Thunderstorm") {
            return true;
        }

        if ($mainWeather == "Rain") {
            return true;
        }

        return false;
    }
}
