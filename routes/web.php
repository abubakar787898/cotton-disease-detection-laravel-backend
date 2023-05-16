<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MedicineController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RecommendedMedicineController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();
  

Route::middleware(['auth:admin'])->group(function () {

    Route::resource('users', UserController::class);
    Route::resource('admins', AdminController::class);
    Route::resource('medicines', MedicineController::class);
    Route::resource('recommended', RecommendedMedicineController::class);
    Route::get('/dashboard', [HomeController::class, 'index'])->name('home');



});

Route::post('/login', [LoginController::class,'customLogin'])->name('login.post');
Route::get('/', function () { 
    if(Auth::guard('admin')->check()){
        return redirect('/dashboard');
    }
    return view('user.auth.login');
 
     });

// Route::name('user.')
//     ->group(function () {


//         Route::get('/login', function () { return view('user.auth.login');   })->name('login');
//         Route::get('/register', function () { return view('user.auth.register');   })->name('register');
//       });
 
    //   Route::fallback(function () {
    //     return view('errors.404');
    // });
