
$(function () {

    $('#createUpdatContactModal,#showContactModal ').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.contact-datatable').DataTable();

    

    $("#btnContactCreate").on("click", function () {
      
        reset('Create');
    });


    //Save and Update
    $('#btnContactSaveUpdate').on('click', function(event) {
        event.preventDefault();
        tinyMCE.triggerSave();
        var formData = new FormData(document.getElementById("contactForm"));
        let action = $(this).val().toLowerCase();
        let id = $('#hiddenid').attr('id');
        let contactAction = action == 'create' ? $('#contactForm').attr('action') : $('#contactForm').attr('action') + '/' + id;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'POST';
        console.log(method);
        $.ajax({
            url:  contactAction,
            method: method,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#btnContactSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnContactSaveUpdate').attr("disabled", true);
               
                $("#btnContactClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnContactSaveUpdate').attr("disabled", false);
              
                $("#btnContactClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");
                    $('#contactForm')[0].reset();
                    $('.contactImage').attr('src', "Addimage.png");
             
                
                setTimeout(function() {
                    $('#createUpdatContactModal').modal('hide');
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
    $(document).on("click", ".btn-contact-edit", function (event) {
      $('#contactForm')[0].reset();
    event.preventDefault();
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "ContactCrud/contactEdit.php",
        method: "GET",
        data: {
            contact_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-contact-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-contact-edit').attr("disabled", false);

        },

        success: function (result) {
          
         
            $('.id').val(id);
            $('.contactName').val(result.name);
            $('.contactEmail').val(result.email);
            tinymce.get('detail').setContent(result.comment == null ? '' : result.comment);

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
                let contactAction =  'ContactCrud/deleteContact.php';
                $.ajax({
                    url: contactAction,
                    method: 'GET',
                    data: { contact_id:id },
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
    $(document).on("click", ".btn-contact-show", function(event) {
        
        event.preventDefault();
      
    let id = $(this).attr('id');
    let forloading = '.' + $(this).attr('rel');

    $.ajax({
        url: "ContactCrud/showContact.php",
        method: "GET",
        data: {
            contact_id: id
        },
        dataType: 'json',

        beforeSend: function() {
            
            $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
            $('.btn-contact-edit').attr("disabled", true);

        },

        complete: function() {
            $('.circular-btn-loader').remove();
            $('.btn-contact-show').attr("disabled", false);

        },

        success: function (result) {
            $('.showContactId').text(id);
            $('.showContactName').text(result.name);
            $('.showContactEmail').text(result.email);
            $('.showContactEmail').attr("href","mailto:"+result.email);

            $('.showDescription').text((result.comment).replace(/(<([^>]+)>)/ig,""));
            $('#showContactModal').modal('show');

            
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

        $('#contactForm').attr("action","ContactCrud/contactUpdate.php");
        $('#btnContactSaveUpdate').text(action);
        $('#btnContactSaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' Contact');
        $('#createUpdatContactModal').modal('show');
            
} else {
    $('#btnContactSaveUpdate').text(action);
    $('#btnContactSaveUpdate').val(action.toLowerCase());
    $('#createUpdatModalLabel').text(action + ' Contact');
   $('#createUpdatContactModal').modal('show');
   
     
}
    }

    //close
    $('#btnContactClose').on('click', function() {
       
        $('.contactName').val("");
        $('.contactEmail').val("");
        tinymce.get('detail').setContent("");


        $('#contactForm')[0].reset();
        $('#createUpdatContactModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showContactModal').modal('hide');
    });
    //
   
});