<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }
    public function  customLogin(Request $request)
    {
        // dd("asdasd");
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        // $credentials = $request->only('email', 'password');
        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            return redirect()->intended('/dashboard');
        }
        // if (Auth::attempt($credentials)) {
        //     return redirect()->intended('dashboard')
        //                 ->withSuccess('Signed in');
        // }
  
        return redirect("/")->withSuccess('Login details are not valid');
    }
 
}
