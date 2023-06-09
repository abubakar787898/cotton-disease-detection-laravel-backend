<?php

namespace App\Http\Controllers;

use App\Models\Medicine;
use App\Models\RecommendedMedicine;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FrontendAppController extends Controller
{
    //
    public function updateProfile(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'phone'=>'required'
           
            
        ]);
    
       $user=User::find( auth()->user()->id);

     $user->name=$request->name;
     $user->phone=$request->phone;
     $user->save();
     $response = [
        'success' => true,
        'data' => $user,
        'message' => "Profile Updated Successfully",
    ];
        return ($user)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
    }
    public function history(Request $request)
    {
     
    
       $user_history=User::with("history.medicine")->find( auth()->user()->id);

     $response = [
        'success' => true,
        'data' => $user_history,
        'message' => " Successfully",
    ];
        return ($user_history)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
    }
    public function getMedicine(Request $request)
    {
     
    
       $medicine_disease=Medicine::where('disease_name',$request->disease)->get();

     $response = [
        'success' => true,
        'data' => $medicine_disease,
        'message' => " Successfully",
    ];
        return ($medicine_disease)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
    }
    public function getUserHistory()
    {
     
    
       $user_history=User::with(['history.medicine'])->find(auth()->user()->id);
  
     $response = [
        'success' => true,
        'data' => $user_history,
        'message' => "Get Successfully",
    ];
        return ($user_history)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
    }
    public function logout(Request $request)
    {
     
        $request->user()->currentAccessToken()->delete();
      
  
     $response = [
        'success' => true,
        
        'message' => "Logout Successfully",
    ];
        return  response()->json($response, 200);
        
    }
    public function getUser()
    {
     
    
       $user=User::find(auth()->user()->id);
  
     $response = [
        'success' => true,
        'data' => $user,
        'message' => "get Successfully",
    ];
        return ($user)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
    }
    public function saveHistory(Request $request)
    {
        $this->validate($request, [
            'medicine_id' => 'required',
            
           
            
        ]);
    
       $medicine=new RecommendedMedicine();

     $medicine->user_id=auth()->user()->id;
     $medicine->medicine_id=$request->medicine_id;
     $imageName = time().'.'.$request->image->extension(); 
     $medicine->image=$imageName;
     $medicine->save();
      $request->image->move(public_path('images'), $imageName);
  
     $response = [
        'success' => true,
        'data' => $medicine,
        'message' => "Save Successfully",
    ];
        return ($medicine)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
    }
}
