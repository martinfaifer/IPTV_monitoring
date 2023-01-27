<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserSlackRequest extends FormRequest
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
            'popis' => ['required', 'string', 'max:255'],
            'webhook' => ['required', 'string', 'unique:slack_channels,webhook']
        ];
    }

    public function messages()
    {
        return [
            'popis.required' => "Vyplňte popis, slouží pro Vaši lepší orientaci při více kanálech",
            'popis.string' => "Neplatný formát",
            'popis.max' => "Maximální počet znaků je 255",
            'webhook.required' => "Vyplňte adresu",
            'webhook.string' => "Neplatý formát",
            'webhook.unique' => "Již existuje tato url"
        ];
    }
}
