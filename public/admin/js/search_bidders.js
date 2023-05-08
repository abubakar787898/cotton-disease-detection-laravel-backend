function searchBidders() {

    var form = $('#leadForm').serialize()
    //console.log($('#CategorySpecFaci').val());
    $('#biddersTable').css('display', 'block')

    $('html, body').animate({
            scrollTop: $('#biddersTable').offset().top
        },
        20
    )

    var table = $('#bidderTable').DataTable()
    table.destroy()

    $('#bidderTable').DataTable({
        processing: true,
        serverSide: true,

        // destroy: true,
        // retrieve: true,

        ajax: {
            url: '/admin/leads/search_bidders',
            type: 'GET',
            data: {
                form: form
            },
            dataType: 'JSON'
        },
        columns: [
            {
                data: 'id',
                name: 'id'
            },
            {
                data: 'title',
                name: 'title'
            },
            {
                data: 'city',
                name: 'city'
            },
            {
                data: 'email',
                name: 'email'
            },
            {
                data: 'no_rooms',
                name: 'no_rooms'
            },
            {
                data: 'priceLevel',
                name: 'priceLevel'
            },
            {
                data: 'packageTitle',
                name: 'packageTitle'
            },
            {
                data: 'acceptedLeads',
                name: 'acceptedLeads'
            },
            {
                data: 'rejectedLeads',
                name: 'rejectedLeads'
            },
            {
                data: 'action',
                name: 'action',
                orderable: false
            }
        ],
        order: [
            [0, 'desc']
        ]
    })
}

function updateEmailContent() {
    $('#lead-email-content').val($('#lead-email-dropdown').val())
}

function sendLeadEmail() {



    $.ajax({
        type: 'POST',
        url: '/admin/send-lead-email',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            id: $('#lead-id').val(),
            subject: $('#lead-email-subject').val(),
            detail: $('#lead-email-content').val(),
        },
        dataType: 'JSON',
        async: false,
        success: function (d) {

            var myModal = new bootstrap.Modal(document.getElementById('email-modal'), {
                keyboard: false
            })

            $.toast({
                title: 'Notice!',
                subtitle: 'Email send',
                content: 'Emaiol has sent to the user.',
                type: 'info',
                delay: 1000,
                dismissible: true,
                // img: {
                //   src: 'image.png',
                //   class: 'rounded',
                //   title: '<a href="https://www.jqueryscript.net/tags.php?/Thumbnail/">Thumbnail</a> Title',
                //   alt: 'Alternative'
                // }
            });

            // var modalToggle = document.getElementById('email-modal')
            // myModal.hide(modalToggle);
            // var modal = bootstrap.Modal.getInstance($('#email-modal').val())
            // modal.hide();
            // $('#email-modal').hide();
            // $('#email-modal').modal('hide');

        }
    })

}

function sendLead(bidderID) {
    $.ajax({
        type: 'POST',
        url: '/admin/lead/send_lead',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            bidder_id: bidderID,
            lead_id: LeadID
        },
        dataType: 'JSON',
        // async: false,
        success: function (d) {
            if (d.status == true) {
                $('#invitationsTable').css('display', 'block')
                GetBiddersInvitations()
            } else if (d.status == false) {
                swal(d.message, {
                    icon: "error"
                });
            }
        }
    })
}

function updateLeadType(leadId, leadType) {
    $.ajax({
        type: 'POST',
        url: '/admin/leads/update_lead_type',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            id: leadId,
            lead_type: leadType
        },
        dataType: 'JSON',
        async: false,
        success: function (d) {

            location.reload();

        }
    })
}

// $("#category_specification_id").change(function () {

//     console.log($("#category_specification_id").val());
// });

$(document).ready(function () {

    $('#category_specification_id').select2({
        placeholder: "All Specifications",
        allowClear: true
    });

    GetBiddersInvitations();

    if ($('#lead_type').val() !== '3-tilbud')
        searchBidders();

})

function changeLeadBidderInvitationStatus(id, status){

    var _token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        type: 'POST',
        url: _baseUrl + "admin/leads/changeLeadBidderInvitationStatus",
        data: {
            id: id,
            status: status,
            _token: _token
        },
        dataType: 'json',
        success: function (result) {
            console.log(result.data.count);
            console.log(result.data.lead_type);
            if(result.data.lead_type == '3-tilbud' && result.data.count > 2 && result.data.searchResults.status == 'success'){
                $('#leadStatus2').val(result.data.searchResults.status);
            }
            else if(result.data.lead_type != '3-tilbud'){
                $('#leadStatus2').val(result.data.searchResults.status);
                $("#leadStatus2").change();
            }
            GetBiddersInvitations();
            $.notify(result.message, "success");

        },
        error: function (result) {
            $.notify(result.statusText, "error");
        }
    });
}

function GetBiddersInvitations() {
    var table = $('#BiddderInvitationsTable').DataTable()
    table.destroy()

    $('#BiddderInvitationsTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: '/admin/leads/get_invitations',
            type: 'GET',
            data: {
                lead_id: LeadID
            },
            dataType: 'JSON'
        },
        columns: [{
                data: 'bidderName',
                name: 'bidderName'
            },
            {
                data: 'date',
                name: 'date'
            },
            {
                data: 'updateTime',
                name: 'updateTime'
            },
            {
                data: 'status',
                name: 'status'
            },
            {
                data: 'action',
                name: 'action',
                orderable: false
            }
        ],
        order: [
            [0, 'desc']
        ]
    })
}
