<?php

namespace Database\Seeders;

use App\Models\UserRole;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserRole::firstOrCreate([
            'role_name' => 'admin',
        ]);

        UserRole::firstOrCreate([
            'role_name' => 'editor',
        ]);

        UserRole::firstOrCreate([
            'role_name' => 'view',
        ]);
    }
}
