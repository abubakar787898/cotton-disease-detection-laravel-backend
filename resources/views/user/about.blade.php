@extends('layouts.app')
@include('navbar')
<!-- ======= About Us Section ======= -->

<div class="front-img">
    <img src="{{ url('img/about-front-img.jpg') }}" alt="">
</div>
<section id="about">
    <div class="container container-content" data-aos="fade-up">

        <header class="section-header">
            <h3>About Us</h3>
            <p>We are 100% focused on delivering an evolving, technologically smarter and overall better functionally programmed training experience in our fitness industry niche.</p>
        </header>

        <div class="row about-cols">

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div class="about-col">
                    <div class="img">
                        <img src="{{ url('img/about-mission.jpg') }}" alt="" class="img-fluid">
                        <div class="icon"><i class="bi bi-bar-chart"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Mission</a></h2>
                    <p>
                        Happy Healthy is leading the way in trademarked modular functional training systems and multi-experience services.
                        All experiences have a participation cap policy to meet strict personal space compliancy for the best training experience.
                        Happy Healthy are market leaders in fitness experiences, compliancy, hygiene, innovation, evolution and facilitation.
                    </p>
                </div>
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div class="about-col">
                    <div class="img">
                        <img src="{{ url('img/about-plan.jpg') }}" alt="" class="img-fluid">
                        <div class="icon"><i class="bi bi-brightness-high"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Plan</a></h2>
                    <p>
                        To deliver and provide the #1 Functional Training Systems in the Pakistan using proven advanced methods, evolving industry standards, expert coaching techniques and exclusive Happy Healthy smart technology, platforms and applications.
                        A happier, stronger community, physically and mentally, based on research, education, passion and confidence. A team effort!
                    </p>
                </div>
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div class="about-col">
                    <div class="img">
                        <img src="{{ url('img/about-vision.jpg') }}" alt="" class="img-fluid">
                        <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Vision</a></h2>
                    <p>
                        Creating a NEW well informed and educated society with an optimised understanding on cellular health, DNA tuning, mitochondrial health, importance of water quality, a connection to harmonious frequencies, sound and light, sustainable lifestyles, self-sufficiency attitudes, environmental respect and a complete harmonious biological environment at a cellular level.
                    </p>
                </div>
            </div>

        </div>

    </div>

    <!-- ======= Team Section ======= -->
    <section id="team">
        <div class="container container-content" data-aos="fade-up">
            <div class="section-header">
                <h3>Our Team</h3>
                <p>Our Happy Healthy coaching team are highly regarded Master Functional Trainers <strong>(MFT)</strong> and have obtained certification, in our specialities, at a high level.
                    <br><strong>We are at your service.</strong> 
                </p>
               
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div class="member" data-aos="fade-up" data-aos-delay="100">
                        <img src="{{ url('img/team-1.jpg') }}" class="img-fluid" alt=" ">
                        <div class="member-info">
                            <div class="member-info-content">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <div class="social">
                                    <a href=" "><i class="bi bi-twitter"></i></a>
                                    <a href=" "><i class="bi bi-facebook"></i></a>
                                    <a href=" "><i class="bi bi-instagram"></i></a>
                                    <a href=" "><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="member" data-aos="fade-up" data-aos-delay="200">
                        <img src="{{ url('img/team-2.jpg') }}" class="img-fluid" alt=" ">
                        <div class="member-info">
                            <div class="member-info-content">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <div class="social">
                                    <a href=" "><i class="bi bi-twitter"></i></a>
                                    <a href=" "><i class="bi bi-facebook"></i></a>
                                    <a href=" "><i class="bi bi-instagram"></i></a>
                                    <a href=" "><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="member" data-aos="fade-up" data-aos-delay="300">
                        <img src="{{ url('img/team-3.jpg') }}" class="img-fluid" alt=" ">
                        <div class="member-info">
                            <div class="member-info-content">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <div class="social">
                                    <a href=" "><i class="bi bi-twitter"></i></a>
                                    <a href=" "><i class="bi bi-facebook"></i></a>
                                    <a href=" "><i class="bi bi-instagram"></i></a>
                                    <a href=" "><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <img src="{{ url('img/team-4.jpg') }}" class="img-fluid" alt=" ">
                        <div class="member-info">
                            <div class="member-info-content">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <div class="social">
                                    <a href=" "><i class="bi bi-twitter"></i></a>
                                    <a href=" "><i class="bi bi-facebook"></i></a>
                                    <a href=" "><i class="bi bi-instagram"></i></a>
                                    <a href=" "><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>

 <!-- ======= End Team Section ======= -->

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

<!-- End About Us Section -->

<!-- ======= Footer ======= -->
@include('footer')

<!-- Preloader -->
<div id="preloader"></div>