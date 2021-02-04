<?php

namespace App;
use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
  
    use UsesUuid;

    protected $fillable = [
        'name', 'vendor_id', 'ref_number'
    ];
    public function vendor(){
        return $this->hasOne('App\Vendor', 'id', 'vendor_id');
    }
}
