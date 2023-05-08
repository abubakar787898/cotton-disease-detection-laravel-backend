<?php

namespace App\Http\Controllers;

use App\Models\RecommendedMedicine;
use App\Models\User;
use Illuminate\Http\Request;

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

    public function getUserHistory()
    {
     
    
       $user_history=User::with('history.medicine')->find(auth()->user()->id);
  
     $response = [
        'success' => true,
        'data' => $user_history,
        'message' => "Get Successfully",
    ];
        return ($user_history)
        ? response()->json($response, 200)
        : response()->json("Some Error ", 400);
    
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
