<?php

namespace App;
use App\Traits\UsesUuid;

use Illuminate\Database\Eloquent\Model;

class Complain extends Model
{    use UsesUuid;
    protected $fillable = [
     'subject', 'message', 'user_id'
    ];
}
