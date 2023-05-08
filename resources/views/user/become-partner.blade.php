@extends('layouts.app')
@include('navbar')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

    .container-fluid {
        height: scroll !important;
    }

    .card {
        margin: 50px 0px;
        width: 330px;
        height: auto;
        background-color: #a7a3d2;
        font-family: 'Rubik', sans-serif
    }

    .card2 {
        height: auto;
        background-color: #f4f5fc;
        margin-top: 20px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        padding: 20px
    }

    .carousel {
        margin-top: -20px !important
    }

    .card2 h5 {
        font-weight: 700
    }

    .card2 p {
        font-size: 13px;
        margin-top: -10px;
        color: #8b8b90
    }

    .size h6 {
        color: #8b8b90
    }

    .diff_sizes {
        width: 100% !important
    }

    .diff_sizes span {
        display: flex;
        height: 40px;
        width: 40px;
        background-color: #fff;
        padding: 2px;
        font-size: 13px;
        justify-content: center;
        align-items: center;
        border-radius: 9px;
        cursor: pointer;
        transition: all 0.5s
    }

    .diff_sizes span:hover {
        background-color: #ed8a14 !important;
        color: #fff;
        font-weight: bold
    }

    .color h6 {
        color: #8b8b90
    }

    .diff_color {
        position: relative
    }

    .diff_color span {
        display: flex;
        height: 50px;
        width: 50px;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fff
    }

    .diff_color span:nth-child(1)::before {
        position: absolute;
        content: '';
        height: 15px;
        width: 15px;
        background-color: red;
        border-radius: 5px
    }

    .diff_color span:nth-child(1):hover {
        border: 2px solid red !important
    }

    .diff_color span:nth-child(2)::before {
        position: absolute;
        content: '';
        height: 15px;
        width: 15px;
        background-color: blue;
        border-radius: 5px
    }

    .diff_color span:nth-child(2):hover {
        border: 2px solid blue !important
    }

    .diff_color span:nth-child(3)::before {
        position: absolute;
        content: '';
        height: 15px;
        width: 15px;
        background-color: black;
        border-radius: 5px
    }

    .diff_color span:nth-child(3):hover {
        border: 2px solid black !important
    }

    .button {
        position: relative
    }

    .button button {
        height: 45px;
        width: 100%;
        background-color: #ff8a00;
        border: none;
        outline: 0;
        border-radius: 9px;
        font-size: 13px;
        color: #fff;
        cursor: pointer;
        transition: all 0.5s
    }

    .button button:hover {
        background-color: #bf6e0e;
        font-weight: bold;
        letter-spacing: 1px
    }

    .button p {
        position: absolute;
        right: 10px;
        top: 24px;
        font-size: 13px;
        color: #fff;
        cursor: pointer;
        transition: all 0.5s
    }

    .button:hover p {
        font-weight: bold !important;
        letter-spacing: 1px !important
    }
</style>

<div class="front-img">
    <h3>Expand your business with the Ultimate Partnership!</h3>
    <img src="{{ url('img/partner-network.jpg') }}" alt="">
</div>

<section id="call-to-action" class="call-to-action mt-5">
    <div class="container text-center" data-aos="zoom-in">
        <h3>Start your fitness journey with
            The HAPPY HEALTHY</h3>
        <p>HAPPY HEALTHY is Pakistan's Largest Premium Gym Network</p>
        <a class="cta-btn" href="#">SIGNUP</a>
    </div>
</section>
{{-- Calories Burn Calculator --}}
{{-- @include('user.calculator'); --}}

<!-- ======= Services Section ======= -->
<section id="services">
    <div class="container" data-aos="fade-up">

        <header class="section-header wow fadeInUp">
            <h3>Benefits of Parterning with us</h3>
            <p>We want to ensure people are put into the best environment possible to genuinely put on lean muscle mass,
                lose unnecessary body fat and most importantly feel that they belong, build confidence and move injury
                free!</p>
        </header>

        <div class="row">

            {{-- <div class="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="bi bi-bar-chart"></i></div>
                <h4 class="title"><a href="">IT's FREE!</a></h4>
                <p class="description">Joining and staying to be our partner will cost you nothing. EVER!</p>
            </div> --}}
            <h1>Our Trainer</h1>
            <div class="col-md-4">

                <div class="container-fluid d-flex justify-content-center align-items-center vh-100 bg-danger">
                    <div class="card rounded-3 ">
                        <div class="top p-3 d-flex justify-content-between"> <i class="fa fa-arrow-left"></i> <i
                                class="fa fa-heart-o"></i> </div>
                        <div id="carouselExampleIndicators" class="carousel slide p-3 " data-bs-ride="carousel">
                            <div class="carousel-indicators"> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 12"></button> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 13"></button> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 32"></button> </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active"> <img src="{{ url('img/tranee1.1.jpeg') }}"
                                        class="d-block w-100 h-100" alt="..."> </div>
                                <div class="carousel-item"> <img src="{{ url('img/tranee1.2.jpeg') }}"
                                        class="d-block w-100" alt="..."> </div>
                                <div class="carousel-item"> <img src="{{ url('img/tranee1.3.jpeg') }}"
                                        class="d-block w-100" alt="..."> </div>
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.4.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.5.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.6.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}

                            </div> <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> <span
                                    class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                                    class="visually-hidden">Previous</span> </button> <button
                                class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"> <span class="carousel-control-next-icon"
                                    aria-hidden="true"></span> <span class="visually-hidden">Next</span> </button>
                        </div>
                        <div class="card2 w-100">
                            <h5>Name</h5>
                            <p>Detail</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Send Request
                               </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="container-fluid d-flex justify-content-center align-items-center vh-100 bg-danger">
                    <div class="card rounded-3 ">
                        <div class="top p-3 d-flex justify-content-between"> <i class="fa fa-arrow-left"></i> <i
                                class="fa fa-heart-o"></i> </div>
                        <div id="carouselExampleIndicators" class="carousel slide p-3 " data-bs-ride="carousel">
                            <div class="carousel-indicators"> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button> </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active"> <img src="{{ url('img/tranee2.2.jpeg') }}"
                                        class="d-block w-100 h-100" alt="..."> </div>
                                <div class="carousel-item"> <img src="{{ url('img/tranee2.1.jpeg') }}"
                                        class="d-block w-100" alt="..."> </div>
                                <div class="carousel-item"> <img src="{{ url('img/tranee2.2.jpeg') }}"
                                        class="d-block w-100" alt="..."> </div>
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.4.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.5.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee2.3.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}

                            </div> <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> <span
                                    class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                                    class="visually-hidden">Previous</span> </button> <button
                                class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> <span
                                    class="carousel-control-next-icon" aria-hidden="true"></span> <span
                                    class="visually-hidden">Next</span> </button>
                        </div>
                        <div class="card2 w-100">
                            <h5>Name</h5>
                            <p>Detail</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Send Request
                               </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="container-fluid d-flex justify-content-center align-items-center vh-100 bg-danger">
                    <div class="card rounded-3 ">
                        <div class="top p-3 d-flex justify-content-between"> <i class="fa fa-arrow-left"></i> <i
                                class="fa fa-heart-o"></i> </div>
                        <div id="carouselExampleIndicators" class="carousel slide p-3 " data-bs-ride="carousel">
                            <div class="carousel-indicators"> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button> <button type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button> </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active"> <img src="{{ url('img/6.jpeg') }}"
                                        class="d-block w-100 h-100" alt="..."> </div>
                                <div class="carousel-item"> <img src="{{ url('img/6.jpeg') }}"
                                        class="d-block w-100" alt="..."> </div>
                                <div class="carousel-item"> <img src="{{ url('img/6.jpeg') }}"
                                        class="d-block w-100" alt="..."> </div>
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.4.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.5.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}
                                {{-- <div class="carousel-item"> <img src="{{ url('img/tranee1.6.jpeg') }}" class="d-block w-100" alt="..."> </div> --}}

                            </div> <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> <span
                                    class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                                    class="visually-hidden">Previous</span> </button> <button
                                class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> <span
                                    class="carousel-control-next-icon" aria-hidden="true"></span> <span
                                    class="visually-hidden">Next</span> </button>
                        </div>
                        <div class="card2 w-100">
                            <h5>Name</h5>
                            <p>Detail</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                               Send Request
                              </button>
                              
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</section>
<!-- Button trigger modal -->

  <!-- Modal -->
  <form action="" id="sendRequest">
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Send Request To Trainer </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="name">Full Name:</label>
            <input class="form-control" type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input class="form-control" type="text" id="email" name="email">
            <label for="email">Phone No:</label>
            <input class="form-control" type="text" id="mobile" name="mobile">
            <select class="form-select" name="member" aria-label="Default select example">
                <option selected >Member</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
            </select>
            <br>
            <label for="address">Detail:</label>
            <textarea class="form-control" type="text" id="detail" name="detail"></textarea>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary sendRequest">Send</button>
        </div>
      </div>
    </div>
  </div>
  </form>
<!-- End Services Section -->

{{-- <form action="" id="sendOrder">
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Shopping Detail</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
            


                    <label for="name">Full Name:</label>
                    <input class="form-control" type="text" id="name" name="name">
                    <label for="email">Email:</label>
                    <input class="form-control" type="text" id="email" name="email">
                    <label for="email">Phone No:</label>
                    <input class="form-control" type="text" id="mobile" name="mobile">
                    <select class="form-select" name="size" aria-label="Default select example">
                        <option selected>Select Size</option>
                        <option value="XL">XL</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Smaill">Small</option>
                    </select>
                    <br>
                    <label for="address">Address:</label>
                    <input class="form-control" type="text" id="address" name="address">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary sendRequest">Buy</button>
                </div>
            </div>
        </div>
    </div>
</form> --}}
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
<script>
    $(document).ready(function() {
        document.getElementById("heart").onclick = function() {
            document.querySelector(".fa-gratipay").style.color = "#E74C3C";
        };
    });
    $(function() {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        // $(".buy").click(function (e) { 
        // e.preventDefault();
        // var id=$(this).attr('id');
        //    $('.productid').val(id);
        // });
        $(".sendRequest").click(function(e) {
            e.preventDefault();
            console.log("first")
            var formData = $('#sendRequest').serialize();

            $.ajax({
                type: "POST",
                url: "/sendRequest",
                data: formData,
                dataType: "json",
                success: function(result) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function() {

                        $('#exampleModal').modal('hide');
                        location.reload();
                    }, 2000);
                },


            });


        });
    });
</script>
