<?php

namespace App\Http\Controllers\api;

use App\Number;
use PHPUnit\Util\Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NumberController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'number' => 'required|string',
        ]);
        try {
            Number::create([
                'name' => $request->name,
                'number' => $request->number,
                'vendor_id'=> $request->vendor_id
            ]);
            return response()->json(['message' => 'Number Registered', 'status' => 'success'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function delete($id)
    {
        try {
           $data = Number::find($id);
           $data->delete();
            return response()->json(['message' => 'Number Deleted', 'status' => 'success','vendor_id' =>$data->vendor_id], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
}
