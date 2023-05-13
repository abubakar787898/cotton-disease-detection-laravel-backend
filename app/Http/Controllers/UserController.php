<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    // function __construct()
    // {
    //      $this->middleware('permission:user-list|user-create|user-edit|user-delete', ['only' => ['index','show']]);
    //      $this->middleware('permission:user-create', ['only' => ['create','store']]);
    //      $this->middleware('permission:user-edit', ['only' => ['edit','update']]);
    //      $this->middleware('permission:user-delete', ['only' => ['destroy']]);
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        $data = User::get();
        return view('users.index',compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
   
        return view('users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|same:confirm-password',
            
        ]);
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);
    
        return redirect()->route('users.index')
                        ->with('success','User created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return view('users.show',compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
      
    
        return view('users.edit',compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'same:confirm-password',
            
        ]);
        $input = $request->all();
        if(!empty($input['password'])){ 
            $input['password'] = Hash::make($input['password']);
        }else{
            $input = Arr::except($input,array('password'));    
        }
        $user = User::find($id);
        $user->update($input);
        return redirect()->route('users.index')
                        ->with('success','User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return redirect()->route('users.index')
                        ->with('success','User deleted successfully');
    }


    public function userLogin(Request $request){

        // if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

        //     $user = Auth::user();
        //     $success['token'] =  $user->createToken('MyApp')->plainTextToken;
        //     $success['name'] =  $user->name;

        //     return response()->json([
        //         'access_token' => $success['token'],
        //         'token_type' => 'Bearer',
        //         'user' => $user
        //     ], "logged in succesfully successfully");
        // } else {

        //     return response([
        //                 'error' => 'Email and Password is Incorrect'
        //             ]);
   
        // }
        $user = User::where('email', $request['email'])->first();

        if (!$user || !Hash::check($request['password'], $user['password'])) {
            return response([
                'error' => 'Email and Password is Incorrect'
            ]);
        } else {

            $token = $user->createToken('access_token')->plainTextToken;
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
                'message'=>"logged in  successfully"
            ], 200);
        }
        
    }
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            // return Helper::sendError(HelperMessage::error(), $e, 401);
            return $this->sendError('Validation Error.', $validator->errors());
        }

    $user=new User();
    $user->name=$request->name;
    $user->email=$request->email;
    $user->phone=$request->phone;
    $user->password=Hash::make( $request->password);
    $user->save();
     

     
            return response()->json([
                'message' => "Account Created successfully",
            ], 200);
         
    }
}
