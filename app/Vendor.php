<?php

namespace App;
use App\Traits\UsesUuid;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use UsesUuid;

    protected $fillable = [
        'name', 'description', 'contact_number','contact_email'
    ];

    public function bill(){
        return $this->hasMany('App\Bill', 'vendor_id', 'id');
    }
}
