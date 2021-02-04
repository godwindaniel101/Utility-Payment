<?php

namespace App\Http\Controllers\api;

use App\Vendor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VendorController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required|string',
            'contact_number' => 'required|string',
            'contact_email' => 'required|string',
        ]);

        Vendor::create([
            'name' => $request->name,
            'description' => $request->description,
            'contact_number' => $request->contact_number,
            'contact_email' => $request->contact_email,
        ]);
        return response()->json(['message' => 'Vendor Created', 'status' => 'success'], 201);
    }

    public function edit($id)
    {
        $data = Vendor::find($id);
        return response()->json($data, 201);
    }
    public function delete($id)
    {
        $data = Vendor::find($id)->delete();
        return response()->json(['message' => 'Vendor Deleted', 'status' => 'success'], 201);
    }
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required|string',
            'contact_number' => 'required|string',
            'contact_email' => 'required|string',
        ]);

        $data = Vendor::find($id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'contact_number' => $request->contact_number,
            'contact_email' => $request->contact_email,
        ]);
        return response()->json(['message' => 'Vendor Updated', 'status' => 'success'], 201);
    }

    public function index(){
        $data = Vendor::all();
        return response()->json($data, 201);
    }

    public function show($id){
        $data = Vendor::where('id',$id)->with('bill')->with('number')->first();
        return response()->json($data, 201);
    }
}
