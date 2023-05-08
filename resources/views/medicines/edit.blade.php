
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Medicine</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('medicines.index') }}"> Back</a>
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

    <form action="{{ route('medicines.update',$medicine->id) }}" method="POST" enctype="multipart/form-data">
    	@csrf
        @method('PUT')
        <div class="row">
		    <div class="col-xs-12 col-sm-12 col-md-12">
                <input type="hidden" name="pid" value="{{$medicine->id}}">
		        <div class="form-group">
		            <strong>Medicine Name:</strong>
		            <input type="text" name="name" value="{{ $medicine->name }}" class="form-control" placeholder="Name">

		        </div>
		    </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Cotton Leaf Disease Name:</strong>
                    <select class="form-select" name="disease_name" aria-label="Default select example">
                        <option >Select Cotton Plant Disease</option>
                        <option value="Bacterial Blight" {{$medicine->disease_name == 'Bacterial Blight'?'selected':''}}>Bacterial Blight</option>
                        <option value="Cotton Leaf Curl Virus"{{$medicine->disease_name =='Cotton Leaf Curl Virus'?'selected':''}}>Cotton Leaf Curl Virus</option>
                        <option value="Asochyta blight"{{$medicine->disease_name =='Asochyta blight'?'selected':''}}>Asochyta blight</option>
                      </select>
		            {{-- <input type="text" name="disease_name" class="form-control" placeholder="Disease Name"> --}}
		        </div>
		    </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <div class="form-group">
		            <strong>Select Product Image:</strong>

                    <input type="file" name="image" class="form-control">
                    <img src="{{url('/images/'.$medicine->image)}}" width="300px">
                    </div>
                </div>
		    <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
		        <div class="form-group">
		            <strong>Detail:</strong>
                    <textarea class="form-control" style="height:150px" name="detail" placeholder="Detail">{{ $medicine->detail }}</textarea>
		        </div>
		    </div>
		    <div class="col-xs-12 col-sm-12 col-md-12 pull-right mt-3">
		            <button type="submit" class="btn btn-primary">Update</button>
		    </div>
		</div>
    </form>
</section>
@endsection 