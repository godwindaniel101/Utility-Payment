<?php

namespace App;
use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;

class Number extends Model
{
    use UsesUuid;
    protected $fillable = [
        'name', 'vendor_id', 'number'
    ];
}
