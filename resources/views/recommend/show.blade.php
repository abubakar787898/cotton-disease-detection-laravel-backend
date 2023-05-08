
@extends('admin.layoutsAdmin.app')


@section('content')
<section class="content container-fluid mt-5">
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show Recommende Medicine</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('recommended.index') }}"> Back</a>
            </div>
        </div>
    </div>
     
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>User:</strong>
                {{ $recommend->user->name }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Disease Name:</strong>
                {{ $recommend->medicine->disease_name }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Medicine:</strong>
                {{ $recommend->medicine->name }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Image:</strong><br>
                <img src="{{url('/images/'.$recommend->image)}}" width="500px">
            </div>
        </div>
    </div>
</section>
@endsection
