<?php

namespace App\Interfaces;

interface StoreToCacheInterface
{
    public function store_to_cache(object $stream): void;
}
