<?php

namespace App\Http\Controllers\Settings\Notification;

use App\Models\Notification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreNotificationRequest;
use App\Actions\Notification\StoreNotificationAction;
use App\Actions\Notification\DeleteNotificationAction;
use App\Actions\Notification\IndexNotificationsAction;

class NotificationController extends Controller
{
    public function index(IndexNotificationsAction $indexNotificationsAction)
    {
        return $indexNotificationsAction->execute();
    }

    public function store(StoreNotificationRequest $request, StoreNotificationAction $storeNotificationAction)
    {
        return $storeNotificationAction->execute($request, Auth::user()) != false
            ? $this->success_response('Vytvořeno')
            : $this->error_response();
    }

    public function destroy(Notification $notification, DeleteNotificationAction $deleteNotificationAction)
    {
        return $deleteNotificationAction->execute($notification) == true
            ? $this->success_response('Odebráno')
            : $this->error_response();
    }
}
