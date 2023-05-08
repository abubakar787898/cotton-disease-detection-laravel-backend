@extends('layouts.app')

<!-- ======= Header ======= -->
@include('navbar')

<div class="front-img">
    <img src="{{ url('img/shop-front.jpg') }}" alt="">
</div>
<div id="video-session" class="my-5">
    <div class="container" data-aos="fade-up">

        <div class="section-header">
            <h3>LET US SHARE OUR KNOWLEDGE THROUGH VIDEO SESSIONS</h3>
            <P>We’re passionate about working out and staying fit.
                After more than 3 years in the fitness industry, we’ve learned a thing or two about nutrition, strength
                training, weight loss,
                and how to have fun staying active. Let us share our knowledge!
            </P>
        </div>

            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        {{-- <div class="card-group"> --}}
                        <div class="card">
                            <video width="344" height="200" controls>
                                <source src="{{url('video/vedio1.mp4')}}" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card">
                                <video width="344" height="200" controls>
                                    <source src="{{url('video/vedio2.mp4')}}" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card">
                                <video width="344" height="200" controls>
                                    <source src="{{url('video/vedio3.mp4')}}" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ======= YouTube Channel Link ======= -->
<section id="youtube-channel" class="youtube-channel my-4 mb-5">
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
</section>
<!-- End YouTube Channel Link -->


<!-- ======= Footer ======= -->
@include('footer')
<!-- Preloader -->
<div id="preloader"></div>
