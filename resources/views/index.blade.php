@extends('layouts.app')

<!-- ======= Header ======= -->
{{-- @include('navbar') --}}
<!-- End Header -->

<!-- ======= hero Section ======= -->
<section id="hero">

    <a  href="{{ route('user.login') }}" class="btn btn-success text-center" style="margin-left:50%; margin-top:15%;">
        {{ __('Go To Login Page') }}
    </a>
</section>
<!-- End Hero Section -->

{{-- <main id="main">

    <section id="featured-services">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 box">
                    <i class="bi bi-briefcase"></i>
                    <h4 class="title"><a href="">WHY CHOOSE US?</a></h4>
                    <p class="description">All coaches are trained to monitor and assess your technique, results and progression. 
                      This attention and focus facilitates your fitness success.</p>
                </div>

                <div class="col-lg-4 box box-bg">
                    <i class="bi bi-card-checklist"></i>
                    <h4 class="title"><a href="">BETTER TRAINING SYSTEMS</a></h4>
                    <p class="description">Happy Healthy is one of the most matured functional team training brands in Pakistan with more than 3 years of hands on systems development, testing and evolution.</p>
                </div>

                <div class="col-lg-4 box">
                    <i class="bi bi-binoculars"></i>
                    <h4 class="title"><a href="">YOUR SMART EXPERIENCE</a></h4>
                    <p class="description">We have developed a series of full body Smart™ Experiences with a strong focus on scientific principles that stimulate the nervous system and the senses for the best results.</p>
                </div>

            </div>
        </div>
    </section> --}}
    <!-- End Featured Services Section -->

    <!-- ======= Call To Action Section ======= -->
    {{-- <section id="call-to-action" class="call-to-action mt-5">
        <div class="container text-center" data-aos="zoom-in">
            <h3>Start your fitness journey with
                The HAPPY HEALTHY</h3>
            <p>HAPPY HEALTHY is Pakistan's Largest Premium Gym Network</p>
            <a class="cta-btn" href="#">SIGNUP</a>
        </div>
    </section> --}}
    <!-- End Call To Action Section -->

    <!-- ======= Facts Section ======= -->
    {{-- <section id="facts">
        <div class="container container-content" data-aos="fade-up">

            <header class="section-header">
                <h3>What We Do?</h3>
                <p>We are an evolving and agile brand based on values and principles with a focus on making a positive impact to everyone in our community.</p>
            </header>

            <div class="row counters">

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="1500" data-purecounter-duration="1"
                        class="purecounter"></span>
                    <p>Clients</p>
                </div>

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="510" data-purecounter-duration="1"
                        class="purecounter"></span>
                    <p>Trainers</p>
                </div>

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="79" data-purecounter-duration="1"
                        class="purecounter"></span>
                    <p>Gyms</p>
                </div>

                <div class="col-lg-3 col-6 text-center">
                    <span data-purecounter-start="0" data-purecounter-end="59" data-purecounter-duration="1"
                        class="purecounter"></span>
                    <p>Winners</p>
                </div>
            </div>

            <div class="facts-img">
                <img src="{{ url('img/contact-front-img.webp') }}" alt="" class="img-fluid">
            </div>

        </div>
    </section> --}}
    <!-- End Facts Section -->

    <!-- ======= Our Clients Section ======= -->
    {{-- <section id="clients">
        <div class="container" data-aos="zoom-in">
            <header class="section-header">
                <h3>Our Partners</h3>
            </header>

            <div class="clients-slider swiper">
                <div class="swiper-wrapper align-items-center">
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-1.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-2.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-3.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-4.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-5.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-6.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-7.png') }}"
                            class="img-fluid" alt=" "></div>
                    <div class="swiper-slide"><img src="{{ url('img/clients/client-8.png') }}"
                            class="img-fluid" alt=" "></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section> --}}
    <!-- End Our Clients Section -->

    <!-- ======= Testimonials Section ======= -->
    {{-- <section id="testimonials" class="section-bg">
        <div class="container" data-aos="fade-up">

            <header class="section-header">
                <h3>FeedBacks of Our Members</h3>
            </header>

            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="{{ url('img/testimonial-1.jpg') }}" class="testimonial-img" alt=" ">
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <p>
                                <img src="{{ url('img/quote-sign-left.png') }}" class="quote-sign-left" alt=" ">
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                risus at semper.
                                <img src="{{ url('img/quote-sign-right.png') }}" class="quote-sign-right" alt=" ">
                            </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="{{ url('img/testimonial-2.jpg') }}" class="testimonial-img" alt=" ">
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <p>
                                <img src="{{ url('img/quote-sign-left.png') }}" class="quote-sign-left" alt=" ">
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                legam anim culpa.
                                <img src="{{ url('img/quote-sign-right.png') }}" class="quote-sign-right" alt=" ">
                            </p>
                        </div>
                    </div> --}}
                    <!-- End testimonial item -->

                    {{-- <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="{{ url('img/testimonial-3.jpg') }}" class="testimonial-img" alt=" ">
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <p>
                                <img src="{{ url('img/quote-sign-left.png') }}" class="quote-sign-left" alt=" ">
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                                veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
                                minim.
                                <img src="{{ url('img/quote-sign-right.png') }}" class="quote-sign-right" alt=" ">
                            </p>
                        </div>
                    </div> --}}
                    <!-- End testimonial item -->
{{-- 
                    <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="{{ url('img/testimonial-4.jpg') }}" class="testimonial-img" alt=" ">
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <p>
                                <img src="{{ url('img/quote-sign-left.png') }}" class="quote-sign-left" alt=" ">
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                                fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem
                                dolore labore illum veniam.
                                <img src="{{ url('img/quote-sign-right.png') }}" class="quote-sign-right" alt=" ">
                            </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="testimonial-item">
                            <img src="{{ url('img/testimonial-5.jpg') }}" class="testimonial-img" alt=" ">
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <p>
                                <img src="{{ url('img/quote-sign-left.png') }}" class="quote-sign-left" alt=" ">
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster
                                veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam
                                culpa fore nisi cillum quid.
                                <img src="{{ url('img/quote-sign-right.png') }}" class="quote-sign-right" alt=" ">
                            </p>
                        </div>
                    </div><!-- End testimonial item -->
                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= YouTube Channel Link ======= -->
    <section id="youtube-channel" class="youtube-channel my-4">
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

</main> --}}
<!-- End #main -->

<!-- ======= Footer ======= -->
{{-- @include('footer') --}}

<!-- Preloader -->
<div id="preloader"></div>
