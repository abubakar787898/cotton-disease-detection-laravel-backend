@extends('layouts.app')

@include('navbar')

<div class="front-img">
    <img src="{{ url('img/hero-carousel/hero2.jpg') }}" alt="">
</div>

<div class="nav-shop">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#most-popular">Most Popular</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#collections">Collections</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#new-arrivals">New Arrivals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#equipment">Equipment</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</div>
{{-- {{dd($products)}} --}}
<section id="shop" class="shop my-5">

    {{-- Most Popular section --}}
    <div id="most-popular" class="my-4">
        <h3 style="margin: 10px;">MOST POPULAR</h3>
        <div class="container-fluid">
            
            
            <div class="row row-cols-1 row-cols-md-3 g-4">
                @foreach ($products as $product)
                <div class="col">
                    
                    <div class="card">
                       
                        <input type="hidden" class="productid" name="pid" id="{{$product->id}}" value="{{$product->id}}">
                        <img src="{{url('/images/'.$product->image)}}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{$product->name}}</h5>
                            <p class="card-text"><strong>Rs. 400</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary buy" data-bs-toggle="modal" id="{{$product->id}}" data-bs-target="#exampleModal">
                                Buy
                              </button>
                    
                        </div>
                    </div>
                  
                </div>
                @endforeach
                {{-- <div class="col">
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular2.jpg') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Brown</h5>
                            <p class="card-text"><strong>Rs. 400</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                </div> --}}
                {{-- <div class="col">
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular3.jpg') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Blue</h5>
                            <p class="card-text"><strong>Rs. 400</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                </div> --}}
                {{-- <div class="col">
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular4.jpg') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Tri-Blend</h5>
                            <p class="card-text"><strong>Rs. 550</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="{{ url('img/collection-women.jpg') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Full</h5>
                            <p class="card-text"><strong>Rs. 600</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                </div> --}}
                
            </div>
        </div>
    </div>
    </div>

    {{-- End Most Popular section --}}

    {{-- Collections Section --}}
    <div id="collections" class="my-5">
        <h3 style="margin: 10px;">COLLECTIONS</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="card-group">
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular1.jpg') }}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Men's</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="{{ url('img/collection-women.jpg') }}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Women's</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular3.jpg') }}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">All</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- End Collections Section --}}

    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action" class="call-to-action mt-5">
        <div class="container text-center" data-aos="zoom-in">
            <h3>Start your fitness journey with
                The HAPPY HEALTHY</h3>
            <p>HAPPY HEALTHY is Pakistan's Largest Premium Gym Network</p>
            <a class="cta-btn" href="#">SIGNUP</a>
        </div>
    </section>
    <!-- End Call To Action Section -->

    {{-- New Arrivals --}}

    <div id="new-arrivals" class="my-5">
        <h3 style="margin: 10px;">NEW ARRIVALS</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="card-group">
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular1.jpg') }}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Black</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular2.jpg') }}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Brown</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="{{ url('img/popular-carousel/popular3.jpg') }}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Happy Healthy Blue</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Buy
                              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- End New Arrivals --}}

    {{-- Equipment Section --}}
    <div id="equipment" class="my-5">
        <h3 style="margin: 10px;">EQUIPMENT</h3>
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    {{-- <div class="card-group"> --}}
                    <div class="card">
                        <img src="{{ url('img/equipment/equipment1.webp') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Buy
                              </button>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="{{ url('img/equipment/equipment2.jpg') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Buy
                              </button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="{{ url('img/equipment/equipment3.webp') }}" class="card-img-top" width="400"
                            height="400" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">See more</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Buy
                              </button>
                        </div>
                    </div>
                </div>
                {{-- </div> --}}
            </div>
        </div>
    </div>
    </div>

    <!-- Modal -->
    <form action="" id="sendOrder">
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Shopping Detail</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <input type="hidden" class="productid" name="pid"  value="">

    
            <label for="name">Full Name:</label>
            <input class="form-control" type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input class="form-control" type="text" id="email" name="email">
            <label for="email">Phone No:</label>
            <input class="form-control" type="text" id="mobile" name="mobile">
            <select class="form-select" name="size" aria-label="Default select example">
                <option selected >Select Size</option>
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
          <button type="button" class="btn btn-primary ordersend" >Buy</button>
        </div>
      </div>
    </div>
  </div>
</form>
  {{-- <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Shopping Detail</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
              <label for="address1">Address:</label>
              <input class="form-control" type="text" id="address1" name="address1">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  </div> --}}

    {{-- End Equipment Section --}}

</section>

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



@include('footer')
<!-- Preloader -->
<div id="preloader"></div>


<script>
    $(".slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, //2000ms = 2s;
        autoplayHoverPause: true,
    });


    $(function () {
    
        $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(".buy").click(function (e) { 
    e.preventDefault();
    var id=$(this).attr('id');
       $('.productid').val(id);
});
        $(".ordersend").click(function (e) { 
            e.preventDefault();
            var formData = $('#sendOrder').serialize();

     $.ajax({
        type: "POST",
        url: "/sendOrder",
        data:formData,
        dataType: "json",
        success: function (result) {
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
