<?php

namespace App;

use App\Traits\UsesUuid;

use Illuminate\Database\Eloquent\Model;

class IssuedBill extends Model
{
    use UsesUuid;

    protected $fillable = [
        'customer_id', 'amount', 'description', 'is_payed'
    ];
    protected $casts = [
        'is_payed' => 'boolean',
    ];
}
