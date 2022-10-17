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
        $schedule->command('streams:start_diagnostic')->everyMinute()->withoutOverlapping()->runInBackground();
        $schedule->command('streams:take_statuses_and_store_to_database')->everyMinute()->runInBackground();
        $schedule->command('system:take_network_data')->everyMinute()->runInBackground();

        $schedule->command('email:send_problem_stream_information')->everyMinute()->runInBackground();
        $schedule->command('cache:uncheck_sended_stream')->everyFiveMinutes()->runInBackground();

        // $schedule->command('streams:start_issue')->everyMinute();
        $schedule->command('streams:check_if_running')->everyTwoMinutes()->withoutOverlapping()->runInBackground();
        $schedule->command('streams:check_if_stream_is_freeze_in_starting')->everyFiveMinutes()->withoutOverlapping()->runInBackground();
        $schedule->command('streams:create_image')->everyFiveMinutes()->runInBackground()->withoutOverlapping();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
