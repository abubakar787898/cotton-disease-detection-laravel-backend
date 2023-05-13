<?php

namespace App\Http\Controllers;

use App\Models\Medicine;
use Illuminate\Http\Request;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // function __construct()
    // {
    //      $this->middleware('permission:medicine-list|medicine-create|medicine-edit|medicine-delete', ['only' => ['index','show']]);
    //      $this->middleware('permission:medicine-create', ['only' => ['create','store']]);
    //      $this->middleware('permission:medicine-edit', ['only' => ['edit','update']]);
    //      $this->middleware('permission:medicine-delete', ['only' => ['destroy']]);
    // }
    public function index()
    {
        //
        $medicines = Medicine::get();
        return view('medicines.index',compact('medicines'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('medicines.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
         
         request()->validate([
            'name' => 'required',
            'image'=>'required',
        ]);
    
      
    $medicine=new Medicine();
    $medicine->name=$request->name;
    $medicine->disease_name=$request->disease_name;
    $medicine->detail=$request->detail;

        $imageName = time().'.'.$request->image->extension(); 
         
       $medicine->image=$imageName;
       $medicine->save();
        $request->image->move(public_path('images'), $imageName);
    
        return redirect()->route('medicines.index')
                        ->with('success','Medicine created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $medicine = Medicine::find($id);

        return view('medicines.show',compact('medicine'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $medicine=Medicine::find($id);
        return view('medicines.edit',compact('medicine'));
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
        //
        
        request()->validate([
            'name' => 'required',
            'detail' => 'required',
         
        ]);
    
  
        
        $medicine=Medicine::find($request->pid);
       
    $medicine->name=$request->name;
    $medicine->disease_name=$request->disease_name;
    $medicine->detail=$request->detail;

    if(isset($request->image)){
        $imageName = time().'.'.$request->image->getClientOriginalExtension(); 
        
        $request->image->move(public_path('images'), $imageName);
       $medicine->image=$imageName;
    }
       $medicine->save();
    
        return redirect()->route('medicines.index')
                        ->with('success','Medicine updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $medicine=Medicine::find($id);
        $medicine->delete();
    
        return redirect()->route('medicines.index')
                        ->with('success','Medicine deleted successfully');
    }
}
