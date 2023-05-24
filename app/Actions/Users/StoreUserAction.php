<?php

namespace App\Actions\Users;

use App\Models\User;
use App\Jobs\SendEmailJob;
use Illuminate\Support\Str;

class StoreUserAction
{
    public function execute(object $formData)
    {
        $password = Str::password(12);
        return rescue(function () use ($formData, $password) {
            User::create([
                'name' => $formData->name,
                'email' => $formData->email,
                'password' => bcrypt($password),
                'role_id' => $formData->role,
            ]);


            // send email notification with username and password
            $text = "Vaše přihlášovací údaje jsou </br> " . $formData->email . " / " . $password;
            SendEmailJob::dispatch($formData->email, $text, "Vítejte v iptv dohledu");
            return true;
        }, function () {
        });
    }
}
