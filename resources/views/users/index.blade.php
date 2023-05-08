@extends('admin.layoutsAdmin.app')


@section('content')
<section class="content container-fluid mt-5">
<div class="row">
    <div class="col-md-12 margin-tb">
        <div class="pull-left">
            <h2>Users Management</h2>
        </div>
        <div class="pull-right">
          
            <a class="btn btn-success" href="{{ route('users.create') }}"> Create New User</a>
         

        </div>
    </div>
</div>

<table class="table table-striped table-hover datatable">
  <thead>
      <tr>
          <th>{{__('No.')}}</th>
          <th>{{__('Name')}}</th>
          <th>{{__('Email')}}</th>
          <th></th>
      </tr>
  </thead>
  <tbody>
      <?php
      $i = 0;
      ?>
       @foreach ($data as $key => $user)
          <tr>
              <td>{{ ++$i }}</td>
              {{-- <td><img src="{{url('/images/'.$user->image)}} " width="100px"></td> --}}
              <td>{{ $user->name }}</td>
              <td>{{ $user->email }}</td>
              <td>
                  <div class="d-flex d-flex flex-row justify-content-end">
                  <form action="{{ route('users.destroy',$user->id) }}" method="POST">
                      <a class="btn btn-info" href="{{ route('users.show',$user->id) }}">  <i class="bi bi-eye-fill"></i></a>
                    
                      <a class="btn btn-primary" href="{{ route('users.edit',$user->id) }}"> <i class="bi bi-pencil-square"></i></a>
                    
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