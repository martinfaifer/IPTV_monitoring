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
        Schema::create('stream_problem_pids', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stream_id')->constrained('streams', 'id');
            $table->string('pid')->index();
            $table->integer('errors')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stream_problem_pids');
    }
};
