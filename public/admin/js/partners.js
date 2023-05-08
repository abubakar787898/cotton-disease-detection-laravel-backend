$(function () {
    fetchPartners();
});

function fetchPartners() {

    $.ajax({
        type: 'get',
        url: _baseUrl + "admin/ajax/partners",
        dataType: "json",
        success: function (result) {

            availableTags = result

            $('.partner').autocomplete({
                source: availableTags,
                minLength: 1,
                select: function (event, ui) {
                    savePartner(ui.item.value, ui.item.label);
                }
            });
        }
    });
}

$('#partner-model').on('hidden.bs.modal', function () {
    $('.bidder-related-partners').html('');
    $('.ui-autocomplete-input').val('');
    location.reload();
})

function savePartner(partnerID, PartnerName) {

    var _token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        type: 'post',
        url: _baseUrl + "admin/ajax/savePartnerBidder",
        data: {
            bidder_id: $('#bidderID').val(),
            partner_id: partnerID,
            _token: _token
        },
        dataType: 'json',
        success: function (result) {
            var partner = '<div id="' + partnerID + '" style="border:1px solid black; display: inline-block; margin-bottom: 10px;">' + PartnerName + '</div>';
            $('.bidder-related-partners').append(partner);
        },
        error: function (result) {
            $.notify("cannot assign duplicate partners to same bidder", "error");
        }
    });
}

$('#create-partner').on('hidden.bs.modal', function () {
    //$('#partner-model').toggle();
    $('.partner-input').val('');
    location.reload();
})

$('#create-partner').on('show.bs.modal', function () {
    $('#partner-model').toggle();
})

$('.remove-partner-id').on('click', function () {

    $.ajax({
        type: 'post',
        url: _baseUrl + "admin/ajax/removePartnerBidder",
        data: {
            partner_bidder_id: $(this).siblings('.partner-bidder-id').text(),
            _token: $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'json',
        success: function (result) {
            //alert(result.message);
             $.notify(result.message, "success");
            location.reload();
        },
        error: function (result) {
            //alert(result.statusText);
            $.notify(result.statusText, "error");
            //$.toaster({ priority : 'danger', title : 'Notice', message : 'Your message here'});
        }
    });
});

$('.ddl-partner-role').on('change', function () {

    // if ($(this).val() == 'primary') {

        $.ajax({
            type: 'post',
            url: _baseUrl + "admin/ajax/changePartnerBidderRole",
            data: {
                bidder_id: $('#bidderID').val(),
                partner_bidder_id: $(this).parent().siblings('.partner-bidder-id').text(),
                partner_bidder_role: $(this).val(),
                _token: $('meta[name="csrf-token"]').attr('content')
            },
            dataType: 'json',
            success: function (result) {
                 $.notify(result.message, "success");
                //alert(result.message);
                location.reload();
            },
            error: function (result) {
                //alert(result.statusText);
                $.notify(result.statusText, "error");
                //$.toaster({ priority : 'danger', title : 'Notice', message : 'Your message here'});
            }
        });
    //}
});

$('.save-partner').on('click', function () {

    $.ajax({
        type: 'post',
        url: _baseUrl + "admin/ajax/savePartner",
        data: {
            bidder_id: $('#bidderID').val(),
            name: $('#PartnerName').val(),
            email: $('#PartnerEmail').val(),
            password: $('#PartnerPassword').val(),
            _token: $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'json',
        success: function (result) {
            $.notify(result.message, "success");
            //(result.message);
        },
        error: function (result) {
            $.notify(result.statusText, "error");
            //alert(result.statusText);
            //$.toaster({ priority : 'danger', title : 'Notice', message : 'Your message here'});
        }
    });
});
