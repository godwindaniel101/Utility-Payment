<?php

namespace App\Http\Controllers\api;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{   
    public function getCustomers(){
        $data = User::where('user_type','customer')->get();
        return response()->json($data);
    }
    public function createDefaultAccess(Request $request)
    {

        $checkuser = User::where('name', 'Sw Global');
        if ($checkuser->count() < 1) {
            User::create([
                'name' => 'Sw Global',
                'email' => 'developer@sw.com',
                'password'  => bcrypt('developer@sw.com'),
                'user_type' => 'admin',
                'email_verified_at' => Carbon::now(),
            ]);
            return response()->json([
                'status' => 'success',
                'message' => 'Seeding Created',
            ]);
        } else {
            $checkuser->update([
                'name' => 'Sw Global',
                'email' => 'developer@sw.com',
                'password'  => bcrypt('developer@sw.com'),
                'user_type' => 'admin',
                'email_verified_at' => Carbon::now(),
            ]);
            return response()->json([
                'status' => 'success',
                'message' => 'Seeding Reset to default'
            ],201);
        }
    }
}
