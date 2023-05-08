@extends('layouts.app')

@include('navbar')

<div class="front-img">
    <img src="{{ url('img/gym-location.png') }}" alt="">
</div>

<section id="contact" class="section-bg">
    <div class="container" data-aos="fade-up">

        <div class="section-header">
            <h3>Gym Location</h3>
        </div>

        <div id="googleMap" class="my-5" style="width:100%;height:400px;"></div>
    </div>
</section>

<script>
    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(41.0799989,-7,1139776),
            zoom: 5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter
        });

        marker.setMap(map);
    }
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBF1Trr5dFbB_ysX0ok0io_TbVkGw8EYGA&region=in&callback=myMap">
</script>

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
