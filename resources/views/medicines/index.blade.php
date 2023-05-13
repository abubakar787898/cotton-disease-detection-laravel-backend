
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Medicines</h2>
            </div>
            <div class="pull-right">
             
                <a class="btn btn-success" href="{{ route('medicines.create') }}"> Add New Medicine</a>
               
            </div>
        </div>
    </div>
    <table class="table table-striped table-hover datatable">
        <thead>
            <tr>
                <th>{{__('No.')}}</th>
                <th>{{__('Image')}}</th>
                <th>{{__('Medicine Name')}}</th>
                <th>{{__('Disease Name')}}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php
            $i = 0;
            ?>
            @foreach ($medicines as $medicine)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td><img src="{{url('/images/'.$medicine->image)}} " width="100px" height="50px"></td>
                    <td>{{ $medicine->name }}</td>
                    <td>{{ $medicine->disease_name }}</td>
                    <td>
                        <div class="d-flex d-flex flex-row justify-content-end">
                        <form action="{{ route('medicines.destroy',$medicine->id) }}" method="POST">
                            <a class="btn btn-info" href="{{ route('medicines.show',$medicine->id) }}">  <i class="bi bi-eye-fill"></i></a>
                          
                            <a class="btn btn-primary" href="{{ route('medicines.edit',$medicine->id) }}"> <i class="bi bi-pencil-square"></i></a>
                          
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger"><i class="fa fa-fw fa-trash"></i></button>
                     
                        </form>
                    </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</section>
@endsection 
