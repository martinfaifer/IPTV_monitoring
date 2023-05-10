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
        Schema::create('stream_process_pids', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('diagnostic_pid')->index()->nullable();
            $table->bigInteger('ffmpeg_pid')->index()->nullable();
            $table->foreignId('stream_id')->constrained('streams', 'id')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stream_process_pids');
    }
};
