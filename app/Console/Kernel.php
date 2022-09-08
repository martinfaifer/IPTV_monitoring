<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('streams:start_diagnostic')->everyMinute();
        $schedule->command('streams:take_statuses_and_store_to_database')->everyMinute();
        $schedule->command('system:take_network_data')->everyMinute();

        // $schedule->command('streams:start_issue')->everyMinute();
        $schedule->command('streams:check_if_running')->everyTwoMinutes();
        $schedule->command('streams:create_image')->everyFiveMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
