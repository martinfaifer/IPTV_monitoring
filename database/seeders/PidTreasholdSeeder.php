<?php

namespace Database\Seeders;

use App\Models\PidTreashold;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PidTreasholdSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!PidTreashold::first()) {
            PidTreashold::create([
                'count' => 20
            ]);
        }
    }
}
