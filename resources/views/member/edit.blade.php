
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Product</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('orders.index') }}"> Back</a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('orders.update',$order->id) }}" method="POST" enctype="multipart/form-data">
    	@csrf
        @method('PUT')
        <div class="row">
		    <div class="col-xs-12 col-sm-12 col-md-12">
                <input type="hidden" name="pid" value="{{$order->id}}">
		        <div class="form-group">
		            <strong>Client Name:</strong>
		            <input type="text" name="name" value="{{ $order->name }}" class="form-control" placeholder="Name">

		        </div>
		    </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
              
		        <div class="form-group">
		            <strong>Client Email:</strong>
		            <input type="text" name="email" value="{{ $order->email }}" class="form-control" placeholder="Email">

		        </div>
		    </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
               
		        <div class="form-group">
		            <strong>Client Number:</strong>
		            <input type="text" name="mobile" value="{{ $order->mobile }}" class="form-control" placeholder="Name">

		        </div>
		    </div>
            {{-- <select class="form-select" name="size" aria-label="Default select example">
                <option selected >Select Size</option>
                <option value="XL">XL</option>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Smaill">Small</option>
              </select> --}}
                  {{-- <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <div class="form-group">
		            <strong>Select Product Image:</strong>

                    <input type="file" name="image" class="form-control">
                    <img src="{{url('/images/'.$order->image)}}" width="300px">
                    </div>
                </div> --}}
		    <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
		        <div class="form-group">
		            <strong>Address:</strong>
                    <textarea class="form-control" style="height:150px" name="address" placeholder="Detail">{{ $order->detail }}</textarea>
		        </div>
		    </div>
            <select id="status" name="status" class="form-control lead-circle">
                @foreach (App\Models\Shop::allStatus as $status)
                    <option class="{{ $status }}-cirlce" value="{{ $status }}">
                        &#x2B24; {{ $status }} </option>
                @endforeach
            </select>
		    <div class="col-xs-12 col-sm-12 col-md-12 pull-right mt-3">
		            <button type="submit" class="btn btn-primary">Submit</button>
		    </div>
		</div>
    </form>
</section>
@endsection 