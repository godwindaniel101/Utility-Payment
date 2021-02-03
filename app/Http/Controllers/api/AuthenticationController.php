<?php

namespace App\Http\Controllers\api;

use App\User;
use Carbon\Carbon;
use PHPUnit\Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users|email:rfc',
            'password' => 'required|string',
            'confirm_password' => 'same:password'
        ]);
        try {
            //validate user details
            User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->password),
                'user_type' => 'customer'
            ]);
            //create user account
            return response()->json(['message' => 'Account Created', 'status' => 'success']);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function login(Request $request)
    {
        // return $request;
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        try {
            $credentials = request(['email', 'password']);
            if (!Auth::attempt($credentials)) {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'invalidcombo' => 'Invalid email/password combination',
                ]);
            }
            //check of password validity
            $user = $request->user();
            //instantiate user
            $tokenResult = $user->createToken('Personal Access Token');
            //create acccess token
            $token = $tokenResult->token;
            $token->expires_at = Carbon::now()->addDays(1);
            //set token expiring date
            $token->save();
            //save token
            return response()->json([
                'user_name' => $user->name,
                'user_type' => $user->user_type,
                'token' => $tokenResult->accessToken,
                'status' => 'verified',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()

            ]);
        } catch (Exception $e) {
            app('sentry')->captureException($e);
            return response()->json(
                $e->getMessage(),
                500
            );
        }
    }
}
