
$(function () {

    $('#createUpdatUserModal,#showUserModal ').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.user-datatable').DataTable();

    

    $("#btnUserCreate").on("click", function () {
      
        reset('Create');
    });


    //Save and Update
    $('#btnUserSaveUpdate').on('click', function(event) {
        event.preventDefault();
        tinyMCE.triggerSave();
        var formData = new FormData(document.getElementById("userForm"));
        let action = $(this).val().toLowerCase();
        let id = $('#hiddenid').attr('id');
        let userAction = action == 'create' ? $('#userForm').attr('action') : $('#userForm').attr('action') + '/' + id;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'POST';
        console.log(method);
        $.ajax({
            url:  userAction,
            method: method,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#btnUserSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnUserSaveUpdate').attr("disabled", true);
               
                $("#btnUserClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnUserSaveUpdate').attr("disabled", false);
              
                $("#btnUserClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");
                    $('#userForm')[0].reset();
             
                
                setTimeout(function() {
                    $('#createUpdatUserModal').modal('hide');
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
    $(document).on("click", ".btn-user-edit", function (event) {
      $('#userForm')[0].reset();
    event.preventDefault();
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "UserCrud/userEdit.php",
        method: "GET",
        data: {
            user_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-user-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-user-edit').attr("disabled", false);

        },

        success: function (result) {
          
         
            $('.id').val(id);
            $('#role option[value="' + result.role_id + '"]').attr('selected', 'selected');

            $('.userName').val(result.name);
            $('.userEmail').val(result.email);
            $('.userPassword').val(result.password);         
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
                let userAction =  'UserCrud/deleteUser.php';
                $.ajax({
                    url: userAction,
                    method: 'GET',
                    data: { user_id:id },
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
    $(document).on("click", ".btn-user-show", function(event) {
        
        event.preventDefault();
      
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "UserCrud/showUser.php",
        method: "GET",
        data: {
            user_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-user-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-user-show').attr("disabled", false);

        },

        success: function (result) {
            $('.showUserId').text(id);
            $('.showUserRole').text(result.role_name);
            $('.showUserName').text(result.name);
            $('.showUserEmail').text(result.email);
            $('.showUserEmail').attr("href","mailto:"+result.email);
            $('#showUserModal').modal('show');

            
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

        $('#userForm').attr("action","UserCrud/userUpdate.php");
        $('#btnUserSaveUpdate').text(action);
        $('#btnUserSaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' User');
        $('#createUpdatUserModal').modal('show');
            
} else {
    $('#btnUserSaveUpdate').text(action);
    $('#btnUserSaveUpdate').val(action.toLowerCase());
    $('#createUpdatModalLabel').text(action + ' User');
   $('#createUpdatUserModal').modal('show');
   
     
}
    }

    //close
    $('#btnUserClose').on('click', function() {
       
        $('#role').get(0).selectedIndex  = 0;
        $('.userName').val("");
        $('.userEmail').val("");
        $('.userPassword').val("");
        // $('#carouselForm')[0].reset();
        $('#createUpdatUserModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showUserModal').modal('hide');
    });
    //
   
});