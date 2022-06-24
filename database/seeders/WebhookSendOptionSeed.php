<?php

namespace Database\Seeders;

use App\Models\WebhookSendOption;
use Illuminate\Database\Seeder;

class WebhookSendOptionSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WebhookSendOption::firstOrCreate([
            'type' => 'alerts',
        ]);

        WebhookSendOption::firstOrCreate([
            'type' => 'infos',
        ]);

        WebhookSendOption::firstOrCreate([
            'type' => 'user_infos',
        ]);

        WebhookSendOption::firstOrCreate([
            'type' => 'hw_problem',
        ]);
    }
}
