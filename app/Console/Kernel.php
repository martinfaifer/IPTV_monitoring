<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Spatie\Health\Models\HealthCheckResultHistoryItem;
use Spatie\Health\Commands\ScheduleCheckHeartbeatCommand;
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
        $schedule->command(ScheduleCheckHeartbeatCommand::class)->everyMinute();

        $schedule->command('websocket:restart')->daily();
        $schedule->command('model:prune', [
            '--model' => [
                HealthCheckResultHistoryItem::class,
            ],
        ])->daily();

        $schedule->command('system:prune')->dailyAt('01:00');
        $schedule->command('streams:start_diagnostic')->everyMinute()->runInBackground();
        $schedule->command('streams:take_statuses_and_store_to_database')->everyMinute()->runInBackground();
        $schedule->command('system:take_network_data')->everyMinute()->runInBackground();
        $schedule->command('weather:get')->everyFiveMinutes()->runInBackground();
        // $schedule->command('ffprobe:analyze_streams')->everyMinute()->runInBackground()->withoutOverlapping(300);

        // + $schedule->command('notification:send_problem_stream_notification_information')->everyMinute()->runInBackground();
        // + $schedule->command('notification:send_ok_stream_notification_information')->everyFiveMinutes()->runInBackground();

        // $schedule->command('streams:start_issue')->everyMinute();
        $schedule->command('streams:check_if_running')->everyTwoMinutes()->withoutOverlapping()->runInBackground();
        // $schedule->command('streams:check_if_stream_is_freeze_in_starting')->everyFiveMinutes()->withoutOverlapping()->runInBackground();
        $schedule->command('streams:create_image')->everyTenMinutes()->runInBackground()->withoutOverlapping();
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
