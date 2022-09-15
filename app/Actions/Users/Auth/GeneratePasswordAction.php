<?php

namespace App\Actions\Users\Auth;

use App\Jobs\SendNewPasswordJob;
use Illuminate\Support\Str;

class GeneratePasswordAction
{
    public function execute(object $user, $sendNotification = false)
    {
        $randomPassword = Str::random(16);
        try {
            $user->update([
                'password' => bcrypt($randomPassword),
            ]);

            if ($sendNotification == true) {
                SendNewPasswordJob::dispatch($user->email, $randomPassword);
            }

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
