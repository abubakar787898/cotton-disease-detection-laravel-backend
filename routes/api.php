<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\FrontendAppController;
use App\Http\Controllers\UserController;
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
Route::post('login', [UserController::class, 'userLogin']);
Route::post('register', [RegisterController::class, 'register']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
Route::middleware(['auth:users'])->group(function () {

Route::post('update-profile', [FrontendAppController::class, 'updateProfile']);
Route::post('save_history', [FrontendAppController::class, 'saveHistory']);
Route::get('get_user_history', [FrontendAppController::class, 'getUserHistory']);
Route::get('get_user', [FrontendAppController::class, 'getUser']);


});