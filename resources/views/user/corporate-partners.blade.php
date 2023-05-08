@extends('layouts.app')
@include('navbar')

<section id="portfolio" class="section-bg">
    <div class="container" data-aos="fade-up">

        <header class="section-header">
            <h3 class="section-title">WORKOUTS</h3>
        </header>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12">
                <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Design</li>
                    <li data-filter=".filter-web">Web</li>
                </ul>
            </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/app1.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/app1.jpg') }}" data-lightbox="portfoli" data-title="Android" class="link-preview "><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">Android</a></h4>
                        <p>App</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/web3.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/web3.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="HTML"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">HTML</a></h4>
                        <p>Web</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/app2.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/app2.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="Flutter"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">Flutter</a></h4>
                        <p>App</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/web2.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/web2.jpg') }}" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="PHP"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link"></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">PHP</a></h4>
                        <p>Web</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/card2.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/card2.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="Logo Design"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">Logo Design</a></h4>
                        <p>Designing</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/app3.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/app3.jpg') }}" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="IOS"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">IOS</a></h4>
                        <p>App</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/web1.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/web1.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="CSS"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html " class="link-details " title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">CSS</a></h4>
                        <p>Web</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/app3.jpg') }}" class="img-fluid " alt=" ">
                        <a href="{{ url('img/portfolio/app3.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="React Native"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html " class="link-details " title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">React Native</a></h4>
                        <p>App</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/card3.jpg') }}" class="img-fluid " alt=" ">
                        <a href="{{ url('img/portfolio/card3.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="PhotoShop"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details " title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html ">PhotoShop</a></h4>
                        <p>Designing</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/web3.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/web3.jpg') }}" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="BootStrap"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link"></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">BootStrap</a></h4>
                        <p>Web</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/card3.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/card3.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="Illustrator"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html " class="link-details " title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4><a href="portfolio-details.html">Illustrator</a></h4>
                        <p>Designing</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <figure>
                        <img src="{{ url('img/portfolio/web1.jpg') }}" class="img-fluid" alt=" ">
                        <a href="{{ url('img/portfolio/web1.jpg') }}" class="link-preview portfolio-lightbox " data-gallery="portfolioGallery " title="JavaScript"><i class="bi bi-plus "></i></a>
                        <a href="portfolio-details.html" class="link-details" title="More Details "><i class="bi bi-link "></i></a>
                    </figure>

                    <div class="portfolio-info">
                        <h4>
                            <a href="portfolio-details.html">JavaScript</a>
                        </h4>
                        <p>Web</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ======= Footer ======= -->
@include('footer')

<!-- Preloader -->
<div id="preloader"></div>