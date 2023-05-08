@extends('layouts.app')
@include('navbar')
<!-- ======= About Us Section ======= -->

<div class="front-img">
    <img src="{{ url('img/about-front-img.jpg') }}" alt="">
</div>
<section id="fitness-timetable" class="mt-5">
    <div class="container" data-aos="fade-up">
        <div class="row">
            <div class="section-header">
                <h3>Smart Experience
                    Timetable</h3>
            </div>
            <div class="fitness-table my-5">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr class="bg-dark text-white text-center">
                            <th scope="col">PERIOD</th>
                            <th scope="col">MONDAY</th>
                            <th scope="col">TUESDAY</th>
                            <th scope="col">WEDNESDAY</th>
                            <th scope="col">THURSDAY</th>
                            <th scope="col">FRIDAY</th>
                            <th scope="col">SATURDAY</th>
                            <th scope="col">SUNDAY</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">6:00AM</th>
                            <td scope>
                                <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">

                                    <div class="card-body">
                                        <h5 class="card-title">Primary card title</h5>
                                        <p class="card-text">Some quick example text to build on the
                                            .</p>
                                    </div>
                                </div>
                            </td>
                            <td scope>
                                <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">

                                    <div class="card-body">
                                        <h5 class="card-title">Secondary card title</h5>
                                        <p class="card-text">Some quick example text to build on the
                                            .</p>
                                    </div>
                                </div>
                            </td>
                            <td scope>@mdo</td>
                            <td scope>Mark</td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>

                        </tr>
                        <tr>
                            <th scope="row">7:00AM</th>
                            <td scope>Jacob</td>
                            <td scope>Thornton</td>
                            <td scope>
                                <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">Danger card title</h5>
                                        <p class="card-text">Some quick example text to build on the
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td scope>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">Success card title</h5>
                                        <p class="card-text">Some quick example text to build on 
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">8:00AM</th>
                            <td scope>Larry the Bird</td>
                            <td scope>@twitter</td>
                            <td scope>Mark</td>
                            <td scope>
                                <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">

                                    <div class="card-body">
                                        <h5 class="card-title">Info card title</h5>
                                        <p class="card-text">Some quick example text to build 
                                            .</p>
                                    </div>
                                </div>
                            </td>
                            <td scope>
                                <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">

                                    <div class="card-body">
                                        <h5 class="card-title">Warning card title</h5>
                                        <p class="card-text">Some quick example text to build 
                                            .</p>
                                    </div>
                                </div>
                            </td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">6:00PM</th>
                            <td scope>
                                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                               
                                <div class="card-body">
                                  <h5 class="card-title">Dark card title</h5>
                                  <p class="card-text">Some quick example text to build on the .</p>
                                </div>
                              </div></td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>Mark</td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">7:00PM</th>
                            <td scope>Jacob</td>
                            <td scope>Thornton</td>
                            <td scope>@fat</td>
                            <td scope>Mark</td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope><div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                                
                                <div class="card-body">
                                  <h5 class="card-title">Light card title</h5>
                                  <p class="card-text">Some quick example text to build on the card.</p>
                                </div>
                              </div></td>
                        </tr>
                        <tr>
                            <th scope="row">8:00PM</th>
                            <td scope>Larry the Bird</td>
                            <td scope>@twitter</td>
                            <td scope>Mark</td>
                            <td scope>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                               
                                <div class="card-body">
                                  <h5 class="card-title">Success card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title.</p>
                                </div>
                              </div></td>
                            <td scope>@mdo</td>
                            <td scope>
                                <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                
                                <div class="card-body">
                                  <h5 class="card-title">Secondary card title</h5>
                                  <p class="card-text">Some quick example text to build on the card.</p>
                                </div>
                              </div></td>
                            <td scope>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">9:00PM</th>
                            <td scope>
                                <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
                                
                                <div class="card-body">
                                  <h5 class="card-title">Warning card title</h5>
                                  <p class="card-text">Some quick example text to build.</p>
                                </div>
                              </div></td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>Mark</td>
                            <td scope>Otto</td>
                            <td scope>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                
                                <div class="card-body">
                                  <h5 class="card-title">Success card title</h5>
                                  <p class="card-text">Some quick example text to build on the card.</p>
                                </div>
                              </div></td>
                            <td scope>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">10:00PM</th>
                            <td scope>Jacob</td>
                            <td scope>Thornton</td>
                            <td scope>@fat</td>
                            <td scope>
                                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                
                                <div class="card-body">
                                  <h5 class="card-title">Dark card title</h5>
                                  <p class="card-text">Some quick example text to build on the card.</p>
                                </div>
                              </div></td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">11:00PM</th>
                            <td scope>Larry the Bird</td>
                            <td scope>@twitter</td>
                            <td scope>Mark</td>
                            <td scope>Otto</td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>
                            <td scope>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</section>

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
