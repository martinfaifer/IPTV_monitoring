<?php

namespace App\Console\Commands;

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
        $nvidiaSmiOutputInXml = shell_exec('nvidia-smi -q -x');

        $xmlObject = simplexml_load_string($nvidiaSmiOutputInXml);
        $nvidiaSmiOutputInJson = json_encode($xmlObject);

        
        echo $nvidiaSmiOutputInJson;
    }
}
