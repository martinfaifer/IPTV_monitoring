<?php

namespace App\Console\Commands;

use App\Models\Stream;
use Illuminate\Console\Command;
use App\Models\StreamsHistoryStatus;
use App\Events\BroadcastStoredStreamStatusesEvent;

class TakeStreamsStatusesAndStoreToDatabaseCommand extends Command
{

    public int $active = 0;
    public int $stoped = 0;
    public int $problem = 0;
    public int $waiting = 0;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streams:take_statuses_and_store_to_database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Take streams statuses and store';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->active = Stream::where('status', Stream::STATUS_MONITORING)->count();
        $this->stoped = Stream::where('status', Stream::STATUS_STOPPED)->count();
        $this->waiting = Stream::where('status', Stream::STATUS_WAITING)->count();
        $this->problem = Stream
            ::where('status', Stream::STATUS_CAN_NOT_START)
            ->orWhere('status', Stream::STATUS_CRASH)
            ->orWhere('status', Stream::STATUS_ISSUE)
            ->count();

        StreamsHistoryStatus::create([
            'active' => $this->active,
            'stoped' => $this->stoped,
            'problem' => $this->problem,
            'waiting' => $this->waiting
        ]);

        BroadcastStoredStreamStatusesEvent::dispatch();
    }
}
