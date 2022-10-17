<?php

namespace App\Actions\Users;

class UpdateUserStaticMozaikaAction
{
    public function execute(object $user, $formData)
    {
        try {
            $user->update([
                'customData' => $this->select_streams($formData->customData),
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function select_streams($streamsId)
    {
        if (is_null($streamsId)) {
            return null;
        }

        return json_encode($streamsId);
    }
}
