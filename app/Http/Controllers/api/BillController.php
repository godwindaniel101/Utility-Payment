<?php

namespace App\Http\Controllers\api;

use App\Bill;
use Exception;
use App\Number;
use App\Payment;
use App\IssuedBill;
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
                'vendor_id' => $request->vendor_id
            ]);
            return response()->json(['message' => 'Bill Created', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function delete($id)
    {
        try {
            $data = Bill::find($id);
            $data->delete();
            return response()->json(['message' => 'Bill Deleted', 'status' => 'success', 'vendor_id' => $data->vendor_id], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function validateNumber(Request $request)
    {
        $vendor = Bill::find($request->bill_id)->vendor;
        $vendor_id = $vendor->id;
        $number_check = Number::where('vendor_id', $vendor_id)->where('number', $request->phone_no)->count();
        if ($number_check < 1) {
            throw \Illuminate\Validation\ValidationException::withMessages([
                'invalidnumber' =>'<span class="x_bolder">'. $request->phone_no .'</span>'. ' is not registered with ' .'<span class="x_bolder">'. $vendor->name .'</span>',
            ]);
        } else {
            return 'valid';
        }
    }
    public function payTopUp(Request $request)
    {
        $this->validate($request, [
            'phone_no' => 'required',
            'amount' => 'required|string',
            'description' => 'required|string',
        ]);
        $this->validateNumber($request);

        try {
            Payment::create([
                'phone_no' =>  $request->phone_no,
                'amount' =>  $request->amount,
                'description' =>  $request->description,
                'user_id' => auth('api')->user()->id,
            ]);
            return response()->json(['message' => 'Payment Made', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function payBill(Request $request)
    {
        $this->validate($request, [
            'amount' => 'required|string',
        ]);
        try {
            Payment::create([
                'amount' =>  $request->amount,
                'description' =>  $request->description,
                'user_id' => auth('api')->user()->id,
                'bill_ref' => $request->bill_ref,
            ]);


            IssuedBill::where('id', $request->bill_ref)->update([
                'is_payed' => true
            ]);
            return response()->json(['message' => 'Payment Made', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function getUserPayment()
    {
        try {
            $data =  Payment::where('user_id', auth('api')->user()->id)->get();
            return response()->json($data, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function getPayment()
    {
        try {
            $data =  Payment::with('user')->get();
            return response()->json($data, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function issueBill(Request $request)
    {
        $this->validate($request, [
            'customer_id' => 'required',
            'customer_name' => 'required|string',
            'amount' => 'required|string',
        ]);
        try {
            IssuedBill::create([
                'customer_id' => $request->customer_id,
                'amount' => $request->amount,
                'description' => $request->description,
            ]);
            return response()->json(['message' => 'Bill Issued', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function userBill()
    {
        try {
            $data =  IssuedBill::where('customer_id', auth('api')->user()->id)->get();
            return response()->json($data, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
}
