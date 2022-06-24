<?php

namespace App\Actions\Streams;

use App\Actions\Streams\FFMpeg\FFMpegCreateImageFromStreamAction;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class GetStreamVideoImageAction
{
    public function execute(object $stream)
    {
        return rescue(function () use ($stream) {
            $image = (new FFMpegCreateImageFromStreamAction())->cache_image(public_path('storage/streamImages/'.Str::slug($stream->nazev).'.jpg'));

            return ImageManagerStatic::make($image)->response();
        }, null);
    }
}
