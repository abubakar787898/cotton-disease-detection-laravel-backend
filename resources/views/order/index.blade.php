
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Orders</h2>
            </div>
            {{-- <div class="pull-right">
                @can('order-create')
                <a class="btn btn-success" href="{{ route('orders.create') }}"> Create New Product</a>
                @endcan
            </div> --}}
        </div>
    </div>


    {{-- @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif --}}

    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Name</th>
            
            <th>Email</th>
            <th>Mobile </th>
            <th>Size </th>
            <th>Address </th>
            <th>Status </th>



            <th width="280px">Action</th>
        </tr>
        <?php
        $i=0;
        ?>
	    @foreach ($orders as $order)
	    <tr>
	        <td>{{ ++$i }}</td>
            
            {{-- <td><img src="{{url('/images/'.$order->image)}} " width="100px"></td> --}}
	        <td>{{ $order->name }}</td>
	        <td>{{ $order->email }}</td>
	        <td>{{ $order->mobile }}</td>
	        <td>{{ $order->size }}</td>
	        <td>{{ $order->detail }}</td>
            <td><i class="bi bi-circle-fill {{$order->status}}"></i>{{$order->status}}</td>


	        <td>
                <form action="{{ route('orders.destroy',$order->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('orders.show',$order->id) }}">Show</a>
                  
                    <a class="btn btn-primary" href="{{ route('orders.edit',$order->id) }}">Edit</a>
                  
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete</button>
             
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>
    <div class="d-flex">
        {!! $orders->links() !!}
    </div>
</section>
@endsection 
