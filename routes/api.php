<?php

use Illuminate\Http\Request;

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

Route::namespace('API')->group(function () {
    Route::get('/front','FrontController@index');
    Route::apiResource('/categories','CategoryController')->middleware('auth:api'); 
    Route::apiResource('/recipes','RecipeController')->middleware('auth:api');


    Route::post('/login','AuthController@login');
    Route::middleware('auth:api')->post('logout','AuthController@logout');
    });