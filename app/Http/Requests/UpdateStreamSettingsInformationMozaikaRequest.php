<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStreamSettingsInformationMozaikaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'invalidSync' => ['nullable', 'boolean'],
            'transportErrors' => ['nullable', 'boolean'],
            'audioAccess' => ['nullable', 'boolean'],
            'videoAccess' => ['nullable', 'boolean'],
            'audioVideoOutOfSync' => ['nullable', 'boolean'],
            'discontinuites' => ['nullable', 'boolean'],
        ];
    }
}
