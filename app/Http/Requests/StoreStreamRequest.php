<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStreamRequest extends FormRequest
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
            'nazev' => ['required', 'string'],
            'stream_url' => ['required', 'unique:streams,stream_url'],
        ];
    }

    public function messages()
    {
        return [
            'nazev.required' => 'Pole nesmí být prázdné',
            'nazev.string' => 'Neplaný formát',
            'stream_url.required' => 'Pole nesmí být prázdné',
            'stream_url.unique' => 'Tato adresa již existuje u jiného streamu',
        ];
    }
}
