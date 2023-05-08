// Display image when choose
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.carouselImage')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
$(function () {

    $('#createUpdatCarouselModal,#showCarouselModal ').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.carousel-datatable').DataTable();

    

    $("#btnCarouselCreate").on("click", function () {
      
        reset('Create');
    });


    //Save and Update
    $('#btnCarouselSaveUpdate').on('click', function(event) {
        event.preventDefault();
        tinyMCE.triggerSave();
        var formData = new FormData(document.getElementById("carouselForm"));
        let action = $(this).val().toLowerCase();
        let id = $('#hiddenid').attr('id');
        let carouselAction = action == 'create' ? $('#carouselForm').attr('action') : $('#carouselForm').attr('action') + '/' + id;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'POST';
        console.log(method);
        $.ajax({
            url:  carouselAction,
            method: method,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#btnCarouselSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnCarouselSaveUpdate').attr("disabled", true);
               
                $("#btnCarouselClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnCarouselSaveUpdate').attr("disabled", false);
              
                $("#btnCarouselClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");
                    $('#carouselForm')[0].reset();
                    $('.carouselImage').attr('src', "Addimage.png");
             
                
                setTimeout(function() {
                    $('#createUpdatCarouselModal').modal('hide');
                    location.reload();
                }, delayInMilliseconds);
            },
            error: function(result) {
                if (result) {
                    console.log(result);
                    // $('#nameValidationMessage').text(result.responseJSON.errors.name);
                    // $('#starsValidationMessage').text(result.responseJSON.errors.stars);

                } else {
                    $.notify(result.responseJSON.message, "error");
                }
            }
        });
    });
//Edit
    $(document).on("click", ".btn-carousel-edit", function (event) {
      $('#carouselForm')[0].reset();
    event.preventDefault();
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "CarouselCrud/carouselEdit.php",
        method: "GET",
        data: {
            carousel_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-carousel-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-carousel-edit').attr("disabled", false);

        },

        success: function (result) {
          
         

      

            $('.id').val(id);
            $('#carouselCategory option[value="' + result.category_id + '"]').attr('selected', 'selected');
            $('.carouselTitle').val(result.title);
            $('.imageEdit').val(result.image);
            $('.carouselImage').attr("src","CarouselCrud/CarouselImages/"+result.image);  
            tinymce.get('detail').setContent(result.description == null ? '' : result.description);

            reset('Update');
        },
        error: function(result) {
            if (result) {
                $.notify(result, "error");


            } else {
                $.notify(result, "error");
            }
        }
    })
});

//Delete
$(document).on("click", ".delete-from-list", function(event) {
    event.preventDefault();
    let id = $(this).attr('id');
    swal({
            title: "Are you sure?",
            text: "Do you want to remove the record",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                let carouselAction =  'CarouselCrud/deleteCarousel.php';
                $.ajax({
                    url: carouselAction,
                    method: 'GET',
                    data: { carousel_id:id },
                    dataType: "json",
                    success: function (result) {
                        console.log(result);
                        $.notify(result.message, "success");
                  
                        setTimeout(function() {
                            location.reload();
                        }, delayInMilliseconds);
                    },
                    error: function(result) {

                        $.notify(result.message, "error");
                    }
                });
            } else {
                swal("Cancelled", "Your record is safe", "error");
            }
        });
});

// Show
    $(document).on("click", ".btn-carousel-show", function(event) {
        
        event.preventDefault();
      
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "CarouselCrud/showCarousel.php",
        method: "GET",
        data: {
            carousel_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-carousel-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-carousel-show').attr("disabled", false);

        },

        success: function (result) {
            $('.showCarouselId').text(id);
            $('.showCarouselCategory').text(result.category_name);
            $('.showAdmin').text(result.name);
            $('.showTitle').text(result.title);
            $('.showimage').attr("src","CarouselCrud/CarouselImages/"+result.image);  
            $('.showDescription').text((result.description).replace(/(<([^>]+)>)/ig,""));
            $('#showCarouselModal').modal('show');

            
        },
        error: function(result) {
            if (result) {
            console.log(result);

            } else {
                $.notify(result, "error");
            }
        }
    })
    });

    
    

    let reset = (action) => {
       
        if (action == 'Update') {

        $('#carouselForm').attr("action","CarouselCrud/carouselUpdate.php");
        $('#btnCarouselSaveUpdate').text(action);
        $('#btnCarouselSaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' Carousel');
        $('#createUpdatCarouselModal').modal('show');
            
} else {
    $('#btnCarouselSaveUpdate').text(action);
    $('#btnCarouselSaveUpdate').val(action.toLowerCase());
    $('#createUpdatModalLabel').text(action + ' Carousel');
   $('#createUpdatCarouselModal').modal('show');
   
     
}
    }

    //close
    $('#btnCarouselClose').on('click', function() {
        // $('#nameValidationMessage').text('');
        // $('#starsValidationMessage').text('');

        // $('#carouselCategory').val("");
        $('#carouselCategory').get(0).selectedIndex  = 0;
        $('.carouselTitle').val("");
        $('.carouselPrice').val("");
        $('.carouselDiscount').val("");
        $('.imageEdit').val("");
        $('.carouselImage').attr('src', "Addimage.png");
        tinymce.get('detail').setContent("");


        // $('#carouselForm')[0].reset();
        $('#createUpdatCarouselModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showCarouselModal').modal('hide');
    });
    //
   
});