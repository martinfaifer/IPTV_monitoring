<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('streams_history_statuses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('active')->index();
            $table->bigInteger('stoped')->index();
            $table->bigInteger('problem')->index();
            $table->bigInteger('waiting')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('streams_history_statuses');
    }
};
