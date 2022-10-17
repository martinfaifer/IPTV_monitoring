<?php

namespace App\Actions\Streams;

use App\Actions\Streams\FFMpeg\FFMpegCreateImageFromStreamAction;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class GetStreamVideoImageAction
{
    public function execute(object $stream, $onlyUrl = false)
    {
        return rescue(function () use ($stream, $onlyUrl) {
            if ($onlyUrl == true) {
                return 'storage/streamImages/'.Str::slug($stream->nazev).'.jpg';
            }
            $image = (new FFMpegCreateImageFromStreamAction())->cache_image(public_path('storage/streamImages/'.Str::slug($stream->nazev).'.jpg'));

            return ImageManagerStatic::make($image)->response();
        }, null);
    }
}
