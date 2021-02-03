<?php

namespace App\Http\Controllers\api;

use App\Complain;
use PHPUnit\Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ComplainController extends Controller
{
    public function create(Request $request)
    {
        try {
            $this->validate($request, [
                'subject' => 'required',
                'message' => 'required',
            ]);
            Complain::Create([
                'subject' => $request->subject,
                'message' => $request->message,
                'user_id'=>auth('api')->user()->id
            ]);
            return response()->json(['message' => 'Payment Made', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function getComplain()
    {
        $data =   Complain::all();
        return response()->json($data, 201);
    }
    public function getUserComplain()
    {
        $data =   Complain::where('user_id', auth('api')->user()->id)->get();
        return response()->json($data, 201);
    }
    public function getUnitComplain($id)
    {
        $data =   Complain::where('id', $id)->first();
        return response()->json($data, 201);
    }
}
