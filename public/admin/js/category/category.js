
$(function () {

    $('#createUpdatCategoryModal,#showCategoryModal ').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.category-datatable').DataTable();

    

    $("#btnCategoryCreate").on("click", function () {
      
        reset('Create');
    });


    //Save and Update
    $('#btnCategorySaveUpdate').on('click', function(event) {
        event.preventDefault();
        
        var formData = new FormData(document.getElementById("categoryForm"));
        let action = $(this).val().toLowerCase();
        let id = $('#hiddenid').attr('id');
        let categoryAction = action == 'create' ? $('#categoryForm').attr('action') : $('#categoryForm').attr('action') + '/' + id;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'POST';
  
        $.ajax({
            url:  categoryAction,
            method: method,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#btnCategorySaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnCategorySaveUpdate').attr("disabled", true);
               
                $("#btnCategoryClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnCategorySaveUpdate').attr("disabled", false);
              
                $("#btnCategoryClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");
                    $('#categoryForm')[0].reset();
                    $('.categoryImage').attr('src', "Addimage.png");
             
                
                setTimeout(function() {
                    $('#createUpdatCategoryModal').modal('hide');
                    location.reload();
                }, 1500);
            },
            error: function(result) {
                if (result) {
                    $.notify(result.message, "error");

                    // $('#nameValidationMessage').text(result.responseJSON.errors.name);
                    // $('#starsValidationMessage').text(result.responseJSON.errors.stars);

                } else {
                    $.notify(result.message, "error");
                }
            }
        });
    });
//Edit
    $(document).on("click", ".btn-category-edit", function (event) {
      $('#categoryForm')[0].reset();
    event.preventDefault();
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "CategoryCrud/EditCategory.php",
        method: "GET",
        data: {
            category_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-category-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-category-edit').attr("disabled", false);

        },

        success: function (result) {
            $('.id').val(id);
            $('.categoryName').val(result.category_name);
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
                let categoryAction =  'CategoryCrud/deleteCategory.php';
                $.ajax({
                    url: categoryAction,
                    method: 'GET',
                    data: { category_id:id },
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
    $(document).on("click", ".btn-category-show", function(event) {
        
        event.preventDefault();
      
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "CategoryCrud/showCategory.php",
        method: "GET",
        data: {
            category_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-category-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-category-show').attr("disabled", false);

        },

        success: function (result) {
            $('.showCategoryId').text(id);
            $('.showCategoryName').text(result.category_name);
           
            $('#showCategoryModal').modal('show');

            
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

        $('#categoryForm').attr("action","CategoryCrud/UpdateCategory.php");
        $('#btnCategorySaveUpdate').text(action);
        $('#btnCategorySaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' Category');
        $('#createUpdatCategoryModal').modal('show');
            
} else {
    $('#btnCategorySaveUpdate').text(action);
    $('#btnCategorySaveUpdate').val(action.toLowerCase());
    $('#createUpdatModalLabel').text(action + ' Category');
   $('#createUpdatCategoryModal').modal('show');
   
     
}
    }

    //close
    $('#btnCategoryClose').on('click', function() {
        // $('#nameValidationMessage').text('');
        // $('#starsValidationMessage').text('');

     
        $('.categoryName').val("");
        $('.id').val("");
       


        $('#categoryForm')[0].reset();
        $('#createUpdatCategoryModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showCategoryModal').modal('hide');
    });
    //
   
});