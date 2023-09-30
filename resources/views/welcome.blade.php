<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="icon/favicon.ico" type="image/x-icon">
    <title>{{ config('app.name') }}</title>
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    <script src="http://localhost:8098"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script defer src="https://vjs.zencdn.net/8.5.2/video.min.js"></script>
    <link href="https://vjs.zencdn.net/8.5.2/video-js.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/loading.css') }}" rel="stylesheet">
    <style>
        * {
            text-transform: none !important;
        }

        [v-cloak] {
            display: inline !important;
        }
    </style>
</head>

<body style="background: #0e192c">
    {{-- <video id="video" controls preload="auto" width="300" height="140" class="video-js" data-setup="{}">
        <source src="http://172.17.2.2/storage/videos/1.m3u8" type="application/x-mpegURL">
        Your browser does not support the video tag.
    </video> --}}
    <v-app id="app">
        <router-view></router-view>
    </v-app>
</body>

</html>
