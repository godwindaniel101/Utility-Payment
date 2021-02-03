<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', 'api\AuthenticationController@register');
Route::post('login', 'api\AuthenticationController@login');
Route::post('set_default', 'api\AdminController@createDefaultAccess');


Route::group([
    'prefix' => 'vendors',
    'middleware' => 'auth:api'
], function () {
    Route::post('create', 'api\VendorController@create');
    Route::get('index', 'api\VendorController@index');
    Route::get('show/{id}', 'api\VendorController@show');
    Route::get('edit/{id}', 'api\VendorController@edit');
    Route::put('update/{id}', 'api\VendorController@update');
    Route::delete('delete/{id}', 'api\VendorController@delete');
});

Route::group([
    'prefix' => 'bill',
    'middleware' => 'auth:api'
], function () {
    Route::post('create', 'api\BillController@create');
    Route::delete('delete/{id}', 'api\BillController@delete');
    Route::post('paybill', 'api\BillController@paybill');
    Route::get('user_payment', 'api\BillController@getUserPayment');
    Route::get('all_payment', 'api\BillController@getPayment');
});


Route::group([
    'prefix' => 'complain',
    'middleware' => 'auth:api'
], function () {
    Route::post('create', 'api\ComplainController@create');
    Route::get('get_complain', 'api\ComplainController@getComplain');
    Route::get('get_customer_complain', 'api\ComplainController@getUserComplain');
    Route::get('get_unit_complain/{id}', 'api\ComplainController@getUnitComplain');
});