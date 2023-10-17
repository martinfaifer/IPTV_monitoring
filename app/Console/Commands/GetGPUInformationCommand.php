<?php

namespace App\Console\Commands;

use App\Models\Gpu;
use App\Models\GpuChart;
use Illuminate\Console\Command;

class GetGPUInformationCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'gpu:information';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Getting information about gpu from system and store them. If GPU is not insert or if failing send notification and show in FE';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $nvidiaSmi = shell_exec('nvidia-smi');
        if (!str_contains($nvidiaSmi, "CUDA")) {
            die();
        }
        $nvidiaSmiOutputInXml = shell_exec('nvidia-smi -q -x');

        $xmlObject = simplexml_load_string($nvidiaSmiOutputInXml);
        $nvidiaSmiOutputInJson = json_encode($xmlObject);
        $nvidiaSmiOutputInArray = json_decode($nvidiaSmiOutputInJson, true);

        if (!Gpu::where('serial', $nvidiaSmiOutputInArray['gpu']['serial'])->first()) {
            $gpu = Gpu::create([
                'product_name' => $nvidiaSmiOutputInArray['gpu']['product_name'],
                'serial' => $nvidiaSmiOutputInArray['gpu']['serial']
            ]);
        } else {
            $gpu = Gpu::where('serial', $nvidiaSmiOutputInArray['gpu']['serial'])->first();
        }

        GpuChart::create([
            'gpu_id' => $gpu->id,
            'used_memory' => (int) $nvidiaSmiOutputInArray['gpu']['fb_memory_usage']['used'],
            'fan_speed' => (int) $nvidiaSmiOutputInArray['gpu']['fan_speed'],
            'gpu_util' => (int) $nvidiaSmiOutputInArray['gpu']['utilization']['gpu_util']
        ]);
    }
}
