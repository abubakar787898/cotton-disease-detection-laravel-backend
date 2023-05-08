
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Recommended Medicines</h2>
            </div>
            <div class="pull-right">
             
                {{-- <a class="btn btn-success" href="{{ route('recommended.create') }}"> Add New Medicine</a> --}}
               
            </div>
        </div>
    </div>


    {{-- @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif --}}
    {{-- {{dd($medicines)}} --}}
    <table class="table table-striped table-hover datatable">
        <thead>
            <tr>
                <th>{{__('No.')}}</th>
                <th>{{__('Image')}}</th>
                <th>{{__('User ')}}</th>
                <th>{{__('Disease ')}}</th> 
                <th>{{__('Medicine ')}}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php
            $i = 0;
            ?>
            @foreach ($recommend as $recommend)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td><img src="{{url('/images/'.$recommend->image)}} " width="100px"></td>
                    <td>{{ $recommend->user->name }}</td>
                    <td>{{ $recommend->medicine->disease_name }}</td>
                    <td>{{ $recommend->medicine->name }}</td>
                    <td>
                        <div class="d-flex d-flex flex-row justify-content-end">
                        <form action="{{ route('recommended.destroy',$recommend->id) }}" method="POST">
                            <a class="btn btn-info" href="{{ route('recommended.show',$recommend->id) }}">  <i class="bi bi-eye-fill"></i></a>
                          
                            {{-- <a class="btn btn-primary" href="{{ route('recommended.edit',$recommend->id) }}"> <i class="bi bi-pencil-square"></i></a> --}}
                          
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger"><i class="fa fa-fw fa-trash"></i></button>
                     
                        </form>
                    </div>

                        {{-- <div class="d-flex d-flex flex-row justify-content-end">
                            <a class="m-1 btn btn-sm btn-primary btn-medicine-show {{ $medicine->id }}-btn_show"
                                data-bs-toggle="tooltip" title="{{__('view')}}" href="javascript:void(0)"
                                id="{{ $medicine->id }}" rel="{{ $medicine->id }}-btn_show">
                                <i class="bi bi-eye-fill"></i>
                            </a>
                            <a class="m-1 btn btn-sm btn-success btn-medicine-edit {{ $medicine->id }}-btn_Edit"
                                data-bs-toggle="tooltip" title="{{__('edit')}}" href="javascript:void(0)"
                                id="{{ $medicine->id }}" rel="{{ $medicine->id }}-btn_Edit">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <a class="m-1 btn btn-danger btn-sm delete-from-list {{ $medicine->id }}-btn_Delete"
                                data-bs-toggle="tooltip" title="{{__('delete')}}" href="javascript:void(0)"
                                id="{{ $medicine->id }}" rel="{{ $medicine->id }}-btn_Delete">
                                <i class="fa fa-fw fa-trash"></i>
                            </a>
                        </div> --}}
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

 
 
</section>
@endsection 
