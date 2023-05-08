
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Member</h2>
            </div>
            {{-- <div class="pull-right">
                @can('member-create')
                <a class="btn btn-success" href="{{ route('members.create') }}"> Create New Product</a>
                @endcan
            </div> --}}
        </div>
    </div>


    {{-- @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif --}}

    <table class="table table-bmembered">
        <tr>
            <th>No</th>
            <th>Name</th>
            
            <th>Email</th>
            <th>Mobile </th>
            <th>Member </th>
            <th>Detail </th>
          



            <th width="280px">Action</th>
        </tr>
        <?php
        $i=0;
        ?>
	    @foreach ($members as $member)
	    <tr>
	        <td>{{ ++$i }}</td>
            
            {{-- <td><img src="{{url('/images/'.$member->image)}} " width="100px"></td> --}}
	        <td>{{ $member->name }}</td>
	        <td><a href="mailto:{{ $member->email }}">{{ $member->email }}</a></td>
	        <td>{{ $member->mobile }}</td>
	        <td>{{ $member->member }}</td>
	        <td>{{ $member->detail }}</td>
            


	        <td>
                <form action="{{ route('members.destroy',$member->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('members.show',$member->id) }}">Show</a>
                  
                    {{-- <a class="btn btn-primary" href="{{ route('members.edit',$member->id) }}">Edit</a> --}}
                  
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete</button>
             
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>
    <div class="d-flex">
        {!! $members->links() !!}
    </div>
</section>
@endsection 
