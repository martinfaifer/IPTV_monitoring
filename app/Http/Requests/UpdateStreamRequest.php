<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStreamRequest extends FormRequest
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
            'nazev' => ['required', 'string', 'max:255'],
            'changeStreamStatus' => ['required', 'boolean'],
            'check_pts' => ['nullable', 'boolean'],
        ];
    }

    public function messages()
    {
        return [
            'nazev.required' => 'Vyplňte název streamu',
            'nazev.string' => 'Neplatný formát',
            'nazev.max' => 'Maximální počet znaků je 255',
            'changeStreamStatus.required' => 'Chybí hodnota',
            'changeStreamStatus.boolean' => 'Neplatný formát',
            'check_pts.boolean' => "Neplatný formát"
        ];
    }
}
