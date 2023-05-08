<?php

namespace App\Http\Controllers;

use App\Models\RecommendedMedicine;
use Illuminate\Http\Request;

class RecommendedMedicineController extends Controller
{
    //
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
        $recommend = RecommendedMedicine::with(['user','medicine'])->get();
        // dd($recommend);
        return view('recommend.index',compact('recommend'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('recommend.create');
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
         // dd($request->image);
         request()->validate([
            'name' => 'required',
            // 'detail' => 'required',
            'image'=>'required',
        ]);
    
      
    $medicine=new RecommendedMedicine();
    $medicine->name=$request->name;
    $medicine->disease_name=$request->disease_name;
    $medicine->detail=$request->detail;

        $imageName = time().'.'.$request->image->extension(); 
         
       $medicine->image=$imageName;
       $medicine->save();
        $request->image->move(public_path('images'), $imageName);
    
        return redirect()->route('recommend.index')
                        ->with('success','Recommended Medicine created successfully.');
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
        $recommend = RecommendedMedicine::find($id);

        return view('recommend.show',compact('recommend'));
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
        $medicine=RecommendedMedicine::find($id);
        return view('recommend.edit',compact('medicine'));
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
    
    // dd($image->getClientOriginalExtension());
        
        $medicine=RecommendedMedicine::find($request->pid);
       
    $medicine->name=$request->name;
    $medicine->disease_name=$request->disease_name;
    $medicine->detail=$request->detail;

    if(isset($request->image)){
        $imageName = time().'.'.$request->image->getClientOriginalExtension(); 
        
        $request->image->move(public_path('images'), $imageName);
       $medicine->image=$imageName;
    }
       $medicine->save();
    
        return redirect()->route('recommend.index')
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
        $medicine=RecommendedMedicine::find($id);
        $medicine->delete();
    
        return redirect()->route('recommend.index')
                        ->with('success','Medicine deleted successfully');
    }
}
