@extends('layouts.app')

{{-- @include('navbar') --}}

{{-- @extends('layouts.app') --}}

<div class="front-img">
    {{-- <h3>Gym Owners please login here to monitor and track users</h3> --}}
    {{-- <img src="{{ url('img/login.jpg') }}" height="30" alt=""> --}}
{{-- @section('content') --}}
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-5">
                <div class="card-header text-white bg-dark "><strong>{{ __('Login') }}</strong></div>

                <div class="card-body bg-light">
                    <form action="{{ route('login.post') }}" method="POST">
                        @csrf
                    
                        <div class="row my-3">
                            <label for="email"
                                class="col-md-4 col-form-label text-md-right"><strong>{{ __('E-Mail Address') }}</strong></label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                                    name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row my-3">
                            <label for="password"
                                class="col-md-4 col-form-label text-md-right"><strong>{{ __('Password') }}</strong>
                            </label>

                            <div class="col-md-6">
                                <input id="password" type="password"
                                    class="form-control @error('password') is-invalid @enderror" name="password"
                                    required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember"
                                        {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0 mt-3">
                            <div class="col-md-8 offset-md-4 btn-login">
                                <button type="submit" class="btn btn-primary">
                                    <strong>{{ __('Login') }}</strong>
                                </button>

                                {{-- @if (Route::has('password.request')) --}}
                                {{-- @endif --}}
                            </div>
                            {{-- <div class="col-md-8 offset-md-4 fgt-pass">
                                <a class="btn btn-link mt-3" href="">
                                    {{ __('Forgot Password?') }}
                                </a>
                            </div> --}}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

{{-- @endsection --}}

<!-- ======= YouTube Channel Link ======= -->
{{-- <section id="youtube-channel" class="youtube-channel my-4 mb-5">
    <div class="container text-center" data-aos="zoom-in">
        <a href="{{ route('index') }}">
            <h3>Happy Healthy</h3>
        </a>
        <a href="">
            <h3><span class="you">You<span class="tube">Tube</span></span></h3>
        </a>
        <p>Please Visit our youtube channel to learn more and more.</p>
        <a class="visit-btn" href="#">VISIT CHANNEL</a>
    </div>
</section> --}}
<!-- End YouTube Channel Link -->



{{-- @include('footer') --}}
<!-- Preloader -->
<div id="preloader"></div>
