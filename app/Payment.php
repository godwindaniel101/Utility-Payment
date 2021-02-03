<?php

namespace App;
use App\Traits\UsesUuid;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{    use UsesUuid;
    protected $fillable = [
        'phone_no', 'amount', 'description', 'user_id'
    ];
    public function user(){
        return $this->hasOne('App\User', 'id', 'user_id');
    }
}