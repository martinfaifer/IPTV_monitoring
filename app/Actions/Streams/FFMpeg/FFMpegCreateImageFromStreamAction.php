<?php

namespace App\Actions\Streams\FFMpeg;

use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Spatie\Image\Image as SpatieImage;
use App\Events\BroadcastStreamImageEvent;

class FFMpegCreateImageFromStreamAction
{
    public $imageName;

    public function execute(object $stream)
    {
        $this->imageName = Str::slug($stream->nazev) . '.jpg';

        $this->remove_file(public_path("storage/streamImages/{$this->imageName}"));


        $isNvidiaGpu = shell_exec('nvidia-smi');

        if (!is_null($isNvidiaGpu)) {
            $this->create_image_via_nvidia_gpu($stream);
        } else {
            $this->create_image_via_cpu($stream);
        }

        $this->resize_image(public_path("storage/streamImages/{$this->imageName}"));
        BroadcastStreamImageEvent::dispatch($stream);
        $this->cache_image(public_path("storage/streamImages/{$this->imageName}"));
    }

    public function create_image_via_cpu(object $stream)
    {
        if (str_contains($stream->stream_url, 'http')) {
            shell_exec("ffmpeg -ss 3 -i {$stream->stream_url} -vframes:v 1 " . public_path("storage/channelsImages/{$this->imageName}"));
        } else {
            shell_exec("ffmpeg -ss 3 -i udp://{$stream->stream_url} -vframes:v 1 " . public_path("storage/channelsImages/{$this->imageName}"));
        }
    }

    public function create_image_via_nvidia_gpu(object $stream)
    {
        if (str_contains($stream->stream_url, 'http')) {
            shell_exec("ffmpeg -hwaccel cuda -i {$stream->stream_url} -vframes:v 1 " . public_path("storage/streamImages/{$this->imageName}"));
        } else {
            shell_exec("ffmpeg -hwaccel cuda -i udp://{$stream->stream_url} -vframes:v 1 " . public_path("storage/streamImages/{$this->imageName}"));
        }
    }

    private function remove_file(string $imageName): void
    {
        try {
            unlink($imageName);
        } catch (\Throwable $th) {
            //
        }
    }

    public function cache_image(string $imagePath)
    {
        return Image::cache(function ($image) use ($imagePath) {
            $image->make($imagePath);
        });
    }

    public function resize_image($imagePath)
    {
        SpatieImage::load($imagePath)
            ->width(480)
            ->height(270)
            ->save($imagePath);
    }
}
