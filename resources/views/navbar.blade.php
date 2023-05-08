@extends('layouts.app')

<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container-fluid">

        <div class="row justify-content-center align-items-center">
            <div class="col-xl-11 d-flex align-items-center justify-content-between">
                <h1 class="logo"><a href="{{ route('index') }}">Happy Healthy</a></h1>
                <!-- Uncomment below if you prefer to use an image logo -->
                {{-- <a href="{{ route('index') }}" class="logo">
                    <img src="{{url('/img/gym-icon.jpg')}}" alt="" class="img-fluid">
                </a> --}}

                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto" href="{{ route('index') }}"></a></li>
                        <li><a class="nav-link scrollto" href="{{ route('user.about') }}">About</a></li>
                        <li><a class="nav-link scrollto" href="{{ route('user.become-partner') }}">Become a Partner</a></li>
                        {{-- <li><a class="nav-link scrollto " href="{{ route('user.corporate-partners') }}">Corporate Partners</a></li> --}}
                        {{-- <li><a class="nav-link scrollto" href="#team">Team</a></li> --}}
                        <li><a class="nav-link" href="{{ route('user.shoping') }}">Shop</a></li>
                        <li class="dropdown"><a href="#"><span>More</span> <i
                                    class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="{{ route('user.video-session') }}">ONLINE VIDEO SESSION</a></li>
                                <li><a href="{{ route('user.location-info') }}">LOCATION INFO</a></li>
                                <li><a href="{{ route('user.calculator') }}">CALORIES CALCULATOR</a></li>

                                <li><a href="{{ route('user.gym-info') }}">GYM INFO</a></li>
                                <li><a href="{{ route('user.fitness-plan') }}">FITNESS PLAN</a></li>
                                <li><a href="{{ route('user.register') }}">SIGNUP</a></li>
                                <li><a href="{{ route('user.faq') }}">FAQ's</a></li>
                            </ul>
                        </li>
                        <li><a class="nav-link scrollto" href="{{ route('user.contact') }}">Contact</a></li>
                        <li><a class="nav-link scrollto login" href="{{ route('user.login') }}">Login</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <!-- .navbar -->
            </div>
        </div>

    </div>
</header>