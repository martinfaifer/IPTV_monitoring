<?php

namespace App\Actions\Streams\Analyze;

class TsDuckOutputToCollectionAction
{
    public function execute(string $tsDuckOutputString)
    {
        // definice proměnné, do které se budou ukladat zpracovaná data ze stringu
        $output = [];
        //vytvoření pole, které obsahuje zatím pro nás nepotřebné informace o streamu, toto pole se následne zpracuje pro nás ideální formu
        $tsDuckData = explode("\n", $tsDuckOutputString);

        foreach ($tsDuckData as $data) {
            if (str_contains($data, 'title:')) {
                $data = str_replace('title:', '', $data);
                $output['title'] = explode(':', $data);
            }

            if (str_contains($data, 'ts:')) {
                $data = str_replace('ts:', '', $data);
                $output['ts'] = explode(':', $data);
            }

            if (str_contains($data, 'global:')) {
                $data = str_replace('global:', '', $data);
                $output['global'] = explode(':', $data);
            }

            if (str_contains($data, 'service:')) {
                $data = str_replace('service:', '', $data);
                $output['service'] = explode(':', $data);
            }

            if (str_contains($data, 'pid:')) {
                $data = str_replace('pid:', '', $data);
                $pids[] = explode(':', $data);
                $output['pids'] = $pids;
            }
        }

        return collect($output);
    }
}
