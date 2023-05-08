// Display image when choose
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.productImage')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
Dropzone.autoDiscover = false;
$(function () {
    
     //Product Image Dropzone
     var myDropzone = new Dropzone("#productImageDropzone");
     myDropzone.on("addedfile", function (file) {
 
     });
    
 
    // show product Images
    $('body').on("click", ".btn-products-image, button.backtogallery", function (event) {
        event.preventDefault();
        let id = $(this).attr('id');
        let forloading = '.' + $(this).attr('rel');

        $.ajax({
            url: 'ProductCrud/fetch_product_image.php',
            method: "GET",
            data: {
                id: id
            },

            dataType: 'json',

            beforeSend: function () {
                $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');

            },
            complete: function () {
                $('.circular-btn-loader').remove();

            },

            success: function (result) {
                // Display images
                $('#images').html('');
                
            

                $('#images').html(result);
                $('#productImageId').val(id);
                $('.backtogallery1').append(`<button class="btn btn-primary" data-bs-target="#productImageModalToggle" data-bs-toggle="modal"
                data-bs-dismiss="modal" id="`+id+`" class="btn-products-image">Back to Gallery</button>`);


                $('#productImageModalToggle').modal('show');
            },
            error: function (result) {
                // if (!!result.responseJSON.errors) {
                //     $('#nameValidationMessage').text(result.responseJSON.errors.name);
                //     $('#starsValidationMessage').text(result.responseJSON.errors.stars);

                // } else {
                // $.notify(result.responseJSON.message, "error");
                // }
            }
        })
    });
    // Delete Fucntion for Gallery Image
    $(document)
        .off("click", ".gallery-image-delete")
        .on("click", ".gallery-image-delete", function (e) {
            var id = $(this).attr("rel");
            e.preventDefault();
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover it again!",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(willDelete => {
                if (willDelete) {
                    $.ajax({
                        url: "ProductCrud/delete_product_image.php",
                        method: 'GET',
                        id: id,
                        dataType: "json",
                        data: {
                            id: id
                        },
                        async: false,
                        success: function () {
                            swal("Your record has been deleted!", {
                                icon: "success"
                            });
                            setTimeout(function () {
                                location.reload();
                            }, 300);
                        }
                    });
                } else {
                    swal("Your record is safe!");
                }
            });
        });
// image section end

    $('#createUpdatProductModal,#showProductModal ').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.product-datatable').DataTable();

    

    $("#btnProductCreate").on("click", function () {
      
        reset('Create');
    });


    //Save and Update
    $('#btnProductSaveUpdate').on('click', function(event) {
        event.preventDefault();
        tinyMCE.triggerSave();
        var formData = new FormData(document.getElementById("productForm"));
        let action = $(this).val().toLowerCase();
        let id = $('#hiddenid').attr('id');
        let productAction = action == 'create' ? $('#productForm').attr('action') : $('#productForm').attr('action') + '/' + id;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'POST';
        console.log(method);
        $.ajax({
            url:  productAction,
            method: method,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#btnProductSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnProductSaveUpdate').attr("disabled", true);
               
                $("#btnProductClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnProductSaveUpdate').attr("disabled", false);
              
                $("#btnProductClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");
                    $('#productForm')[0].reset();
                    $('.productImage').attr('src', "Addimage.png");
             
                
                setTimeout(function() {
                    $('#createUpdatProductModal').modal('hide');
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
    $(document).on("click", ".btn-product-edit", function (event) {
      $('#productForm')[0].reset();
    event.preventDefault();
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "ProductCrud/productEdit.php",
        method: "GET",
        data: {
            product_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-product-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-product-edit').attr("disabled", false);

        },

        success: function (result) {
          
         

      

            $('.id').val(id);
            $('#productCategory option[value="' + result.category_id + '"]').attr('selected', 'selected');
            $('.productTitle').val(result.title);
            $('.productPrice').val(result.price);
            $('.productDiscount').val(result.discount);
            $('.imageEdit').val(result.image);
            $('.productImage').attr("src","ProductCrud/ProductImages/"+result.image);  
            tinymce.get('detail').setContent(result.description == null ? '' : result.description);

            reset('Update');
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
                let productAction =  'ProductCrud/deleteProduct.php';
                $.ajax({
                    url: productAction,
                    method: 'GET',
                    data: { product_id:id },
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
    $(document).on("click", ".btn-product-show", function(event) {
        
        event.preventDefault();
      
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "ProductCrud/showProduct.php",
        method: "GET",
        data: {
            product_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-product-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-product-show').attr("disabled", false);

        },

        success: function (result) {
            $('.showProductId').text(id);
            $('.showProductCategory').text(result.category_name);
            $('.showAdmin').text(result.name);

            $('.showTitle').text(result.title);
            $('.showPrice').text(result.price);
            $('.showDiscount').text(result.discount);
            $('.showimage').attr("src","ProductCrud/ProductImages/"+result.image);  
            $('.showDescription').text((result.description).replace(/(<([^>]+)>)/ig,""));
            $('#showProductModal').modal('show');

            
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

        $('#productForm').attr("action","ProductCrud/productUpdate.php");
        $('#btnProductSaveUpdate').text(action);
        $('#btnProductSaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' Product');
        $('#createUpdatProductModal').modal('show');
            
} else {
    $('#btnProductSaveUpdate').text(action);
    $('#btnProductSaveUpdate').val(action.toLowerCase());
    $('#createUpdatModalLabel').text(action + ' Product');
   $('#createUpdatProductModal').modal('show');
   
     
}
    }

    //close
    $('#btnProductClose').on('click', function() {
        // $('#nameValidationMessage').text('');
        // $('#starsValidationMessage').text('');

        // $('#productCategory').val("");
        $('#productCategory').get(0).selectedIndex  = 0;
        $('.productTitle').val("");
        $('.productPrice').val("");
        $('.productDiscount').val("");
        $('.imageEdit').val("");
        $('.productImage').attr('src', "Addimage.png");
        tinymce.get('detail').setContent("");


        // $('#productForm')[0].reset();
        $('#createUpdatProductModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showProductModal').modal('hide');
    });
    //
   
});