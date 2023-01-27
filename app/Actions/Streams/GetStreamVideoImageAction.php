<?php

namespace App\Actions\Streams;

use App\Actions\Streams\FFMpeg\FFMpegCreateImageFromStreamAction;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class GetStreamVideoImageAction
{
    public function execute(object $stream, $onlyUrl = false)
    {
        try {
            if ($onlyUrl == true) {
                return 'storage/streamImages/' . Str::slug($stream->nazev) . '.jpg';
            }
            $image = (new FFMpegCreateImageFromStreamAction())->cache_image(public_path('storage/streamImages/' . Str::slug($stream->nazev) . '.jpg'));

            if ($image != false) {
                return ImageManagerStatic::make($image)->response();
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
