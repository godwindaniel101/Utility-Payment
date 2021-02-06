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

Route::middleware('auth:api')->get('logout', 'api\AuthenticationController@logout');
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
    Route::post('pay_top_up', 'api\BillController@payTopUp');
    Route::post('pay_bill', 'api\BillController@payBill');
    Route::get('user_payment', 'api\BillController@getUserPayment');
    Route::get('all_payment', 'api\BillController@getPayment');
    Route::post('issue_bill', 'api\BillController@issueBill');
    Route::get('user_bill', 'api\BillController@userBill');
});
Route::group([
    'prefix' => 'number',
    'middleware' => 'auth:api'
], function () {
    Route::post('create', 'api\NumberController@create');
    Route::delete('delete/{id}', 'api\NumberController@delete');
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
Route::group([
    'prefix' => 'admin',
    'middleware' => 'auth:api'
], function () {
    Route::post('get_customers', 'api\AdminController@getCustomers');
    Route::get('get_customer_detail/{id}', 'api\AdminController@getCustomersDetail');
});