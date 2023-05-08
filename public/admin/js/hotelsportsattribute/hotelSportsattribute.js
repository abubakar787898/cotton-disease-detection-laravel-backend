$(function () {

    $('#HotelSportsModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    //close
    $('#btnHotelSportsAtrributesClose').on('click', function () {
        $('#HotelSportsAttributesModal').modal('hide');
        $('#ShowHotelSportsAttrbutesHotel').text('');
        $('#ShowHotelSportsAttrbutesSports').text('');
        tinymce.get('sportsdetail').setContent('');
    });

    
    $(document).on("click", ".btn-hotel-sports-detail", function (event) {
        event.preventDefault();

        let hotel_id = $(this).closest('.tr-hotel-detail').find('.td-hotel-id').text();
        let sports_id = $(this).attr('id');
        let hotel_name = $(this).closest('.tr-hotel-detail').find('.td-hotel-name').text();
        let sports_name = $(this).text().trim();
        
        $.ajax({
            url: _baseUrl + 'hotelsportsattributes/' + hotel_id,
            method: "GET",
            data: {
                hotel_id: hotel_id,
                sports_id: sports_id,
            },
            dataType: 'json',

            success: function (result) {

                $('#HdnHotelId').val(hotel_id);
                $('#HdnSportsId').val(sports_id);
                $('#ShowHotelSportsAttrbutesHotel').text(hotel_name);
                $('#ShowHotelSportsAttrbutesSports').text(sports_name);
                tinymce.get('sportsdetail').setContent(result.data.searchResults?.name == null ? '' : result.data.searchResults.name);

                $('#HotelSportsAttributesModal').modal('show');
            },
            error: function (result) {
                // if (!!result.responseJSON.errors) {
                //     $('#nameValidationMessage').text(result.responseJSON.errors.name);
                //     $('#starsValidationMessage').text(result.responseJSON.errors.stars);

                // } else {
                //     $.notify(result.responseJSON.message, "error");
                // }
            }
        })

    });

    //Save 
    $('#btnHotelSportsAtrributesSaveUpdate').on('click', function(event) {
        event.preventDefault();
        tinyMCE.triggerSave();
        var formData = $('#HotelSportsAttributesForm').serialize();
        let id = $('#HdnHotelId').val();
        $.ajax({
            url: _baseUrl +  'hotelsportsattributes/' + id,
            method: 'PUT',
            data: formData,
            dataType: "json",

            beforeSend: function() {
                $('#btnHotelSportsAtrributesSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnHotelSportsAtrributesSaveUpdate').attr("disabled", true);
                $('.form-check-input').attr("disabled", true);
                $("#btnHotelSportsAtrributesClose").attr("disabled", true);
            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnHotelSportsAtrributesSaveUpdate').attr("disabled", false);
                $('.form-check-input').attr("disabled", false);
                $("#btnHotelSportsAtrributesClose").attr("disabled", false);
            },

            success: function(result) {

                $.notify(result.message, "success");

                // if (action == 'create') {
                //     $('#hotelsForm')[0].reset();
                // }
                //$('.hotel-datatable').DataTable().ajax.reload();
                setTimeout(function() {
                    $('#HotelSportsAttributesModal').modal('hide');
                    location.reload();
                }, delayInMilliseconds);
            },
            error: function(result) {
                // if (!!result.responseJSON.errors) {
                //     $('#nameValidationMessage').text(result.responseJSON.errors.name);
                //     $('#starsValidationMessage').text(result.responseJSON.errors.stars);

                // } else {
                console.log(result.responseJSON.message);
                    $.notify(result.responseJSON.message, "error");
                //}
            }
        });
    });

});
