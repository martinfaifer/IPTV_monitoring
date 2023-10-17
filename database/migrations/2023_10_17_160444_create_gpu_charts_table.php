<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gpu_charts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gpu_id')->constrained('gpus', 'id');
            $table->string('used_memory')->nullable();
            $table->string('fan_speed')->nullable();
            $table->string('gpu_util')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gpu_charts');
    }
};
