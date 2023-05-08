
@extends('admin.layoutsAdmin.app')

@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-md-12 margin-tb">
            <div class="pull-left">
                <h2>Add New Medicine</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('medicines.index') }}"> Back</a>
            </div>
        </div>
    </div>

    {{-- @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif --}}

    <form action="{{ route('medicines.store') }}" method="POST" enctype="multipart/form-data">
    	@csrf
         <div class="row">
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Medicine Name:</strong>
		            <input type="text" name="name" class="form-control" placeholder="Name">
		        </div>
		    </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Cotton Leaf Disease Name:</strong>
                    <select class="form-select" name="disease_name" aria-label="Default select example">
                        <option selected>Select Cotton Plant Disease</option>
                        <option value="Bacterial Blight">Bacterial Blight</option>
                        <option value="Cotton Leaf Curl Virus">Cotton Leaf Curl Virus</option>
                        <option value="Asochyta blight">Asochyta blight</option>
                      </select>
		            {{-- <input type="text" name="disease_name" class="form-control" placeholder="Disease Name"> --}}
		        </div>
		    </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <div class="form-group">
		            <strong>Select Product Image:</strong>

                    <input type="file" name="image" class="form-control">
                    </div>
                </div>
		    <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
		        <div class="form-group">
		            <strong>Detail:</strong>
		            <textarea class="form-control" style="height:150px" name="detail" placeholder="Detail"></textarea>
		        </div>
		    </div>
		    <div class="col-xs-12 col-sm-12 col-md-12 pull-right mt-3">
		            <button type="submit" class="btn btn-primary">Submit</button>
		    </div>
		</div>
    </form>
</section>
@endsection 