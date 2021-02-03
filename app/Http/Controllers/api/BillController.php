<?php

namespace App\Http\Controllers\api;

use App\Bill;
use Exception;
use App\Payment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BillController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'ref_number' => 'required|string',
        ]);
        try {
            Bill::create([
                'name' => $request->name,
                'ref_number' => $request->ref_number,
                'vendor_id'=> $request->vendor_id
            ]);
            return response()->json(['message' => 'Bill Created', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function delete($id)
    {
        try {
            Bill::find($id)->delete();
            return response()->json(['message' => 'Bill Delete', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function paybill(Request $request){
        $this->validate($request, [
            'phone_no' => 'required',
            'amount' => 'required|string',
            'description' => 'required|string',
        ]);
        try {
            Payment::create([
                'phone_no' =>  $request->phone_no,
                'amount' =>  $request->amount,
                'description' =>  $request->description,
                'user_id'=>auth('api')->user()->id
            ]);
            return response()->json(['message' => 'Payment Made', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function getUserPayment() {
        $data =  Payment::where('user_id', auth('api')->user()->id)->get();
        return response()->json($data, 201);
    }
    public function getPayment() {
        $data =  Payment::with('user')->get();
        return response()->json($data, 201);
    }
}
