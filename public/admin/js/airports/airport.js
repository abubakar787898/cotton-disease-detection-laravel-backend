$(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#createUpdatAirportModal,#showAirportModal ').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.airport-datatable').DataTable();

    $("#btnAirportCreate").on("click", function() {
        reset('Create');
    });

    $(document).on("click", ".btn-airport-show", function(event) {
        event.preventDefault();
        let id = $(this).attr('id');
        let forloading = '.' + $(this).attr('rel');

        $.ajax({
            url: _baseUrl + 'airports/' + id,
            method: "GET",
            data: {
                id: id
            },

            dataType: 'json',

            beforeSend: function() {
                $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');

            },
            complete: function() {
                $('.circular-btn-loader').remove();

            },

            success: function(result) {
                $('.showAirportId').text(id);
                $('.showAirportName').text(result.data.searchResults.name);
                $('.showAirportRegion').text(result.data.searchResults.region.name);
                $('#showAirportModal').modal('show');
            },
            error: function(result) {
               
                $.notify(result.responseJSON.message, "error");
              
            }
        })
    });

    //Edit
    $(document).on("click", ".btn-airport-edit", function(event) {
        event.preventDefault();
        let id = $(this).attr('id');
        let forloading = '.' + $(this).attr('rel');
        $.ajax({
            url: _baseUrl + 'airports/' + id + '/edit',
            method: "GET",
            data: {
                id: id
            },
            dataType: 'json',

            beforeSend: function() {
               
                $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('.btn-airport-edit').attr("disabled", true);

            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('.btn-airport-edit').attr("disabled", false);

            },

            success: function(result) {

                $('.id').val(id);
             
                $('#region_id option[value="' + result.data.searchResults.region_id + '"]').attr('selected', 'selected');
                $('.name').val(result.data.searchResults.name);



                reset('Update');
            },
            error: function (result) {
                
                if (!!result.responseJSON.errors) {
                    $('#nameValidationMessage').text(result.responseJSON.errors.name);
                    $('#regionValidationMessage').text(result.responseJSON.errors.region);

                } else {
                    $.notify(result.responseJSON.message, "error");
                }
            }
        })
    });


    //Save 
    $('#btnAirportSaveUpdate').on('click', function(event) {
        event.preventDefault();
       
        var formData = $('#airportForm').serialize();
        let action = $(this).val().toLowerCase();
        let id = $('#hiddenid').attr('id');
        let airportAction = action == 'create' ? $('#airportForm').attr('action') : $('#airportForm').attr('action') + '/' + id;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'PUT';
        console.log(method);
        $.ajax({
            url: _baseUrl + airportAction,
            method: method,
            data: formData,
            dataType: "json",

            beforeSend: function() {
                $('#btnAirportSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnAirportSaveUpdate').attr("disabled", true);
                $('.form-check-input').attr("disabled", true);
                $("#btnAirportClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnAirportSaveUpdate').attr("disabled", false);
                $('.form-check-input').attr("disabled", false);
                $("#btnAirportClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");

                if (action == 'create') {
                    $('#airportForm')[0].reset();
                }
          
                setTimeout(function() {
                    $('#createUpdatAirportModal').modal('hide');
                    location.reload();
                }, delayInMilliseconds);
            },
            error: function(result) {
                if (!!result.responseJSON.errors) {
                    $('#nameValidationMessage').text(result.responseJSON.errors.name);
                    $('#regionValidationMessage').text(result.responseJSON.errors.region_id);

                } else {
                    $.notify(result.responseJSON.message, "error");
                }
            }
        });
    });

    //Delete
    $(document).on("click", ".delete-from-airport-list", function(event) {
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
                    let airportAction = $('#airportForm').attr('action') + '/' + id;
                    $.ajax({
                        url: _baseUrl + airportAction,
                        method: 'DELETE',
                        data: id,
                        dataType: "json",
                        success: function(result) {
                            $.notify(result.message, "success");
                         
                            setTimeout(function() {
                                location.reload();
                            }, delayInMilliseconds);
                        },
                        error: function(result) {

                            $.notify(result.responseJSON.message, "error");
                        }
                    });
                } else {
                    swal("Cancelled", "Your record is safe", "error");
                }
            });
    });

    let reset = (action) => {
      
        $('#btnAirportSaveUpdate').text(action);
        $('#btnAirportSaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' Airport');
        $('#createUpdatAirportModal').modal('show');
         
    }

    //close
    $('#btnAirportClose').on('click', function() {
        $('#nameValidationMessage').text('');
        $('#regionValidationMessage').text('');
        $('.id').val('');
        $('#region_id').get(0).selectedIndex  = 0;
        $('.name').val('');
        $('#createUpdatAirportModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showAirportModal').modal('hide');
    });

});