<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserPasswordRequest extends FormRequest
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
            'password' => ['required', 'max:255', 'min:9'],
            'password_confirm' => ['required', 'same:password'],
        ];
    }

    public function messages()
    {
        return [
            'password.required' => 'Vyplňte heslo',
            'password.max' => 'Maximální počet znaků je 255',
            'password.min' => 'Minimální počet znaků je 9',
            'password_confirm.required' => 'Vyplňte heslo',
            'password_confirm.sane' => 'Hesla se neshodují',
        ];
    }
}
