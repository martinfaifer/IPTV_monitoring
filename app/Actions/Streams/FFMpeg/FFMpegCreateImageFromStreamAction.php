<?php

namespace App\Actions\Streams\FFMpeg;

use App\Events\BroadcastStreamImageEvent;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Spatie\Image\Image as SpatieImage;

class FFMpegCreateImageFromStreamAction
{
    public $imageName;
    public $filePath;

    public function execute(object $stream)
    {
        $this->imageName = Str::slug($stream->nazev) . '.jpg';
        $this->filePath = public_path("storage/streamImages/{$this->imageName}");

        if (file_exists($this->filePath)) {
            $this->remove_file($this->filePath);
        }

        $isNvidiaGpu = shell_exec('nvidia-smi');

        if (str_contains($isNvidiaGpu, "failed")) {
            $this->create_image_via_cpu($stream);
        } else {
            $this->create_image_via_nvidia_gpu($stream);
        }
        try {
            $this->resize_image($this->filePath);
            event(new BroadcastStreamImageEvent($stream));
            $this->cache_image($this->filePath);
        } catch (\Throwable $th) {
        }
    }

    public function create_image_via_cpu(object $stream)
    {
        if (str_contains($stream->stream_url, 'http')) {
            shell_exec("ffmpeg -ss 3 -i {$stream->stream_url} -vframes:v 1 " . public_path("storage/streamImages/{$this->imageName}"));
        } else {
            shell_exec("ffmpeg -ss 3 -i udp://{$stream->stream_url} -vframes:v 1 " . public_path("storage/streamImages/{$this->imageName}"));
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
