$(function () {
    $(".assigned-block-deatils").sortable({
        stop: function (event, ui) {
            saveOrders();

            console.log("event", event);
            console.log("ui", ui);
        },
    });

    $(".selectpicker").select2();
});

function saveOrders() {
    pageBlockDetailsIds = [];

    $(".list-page-block-detail").each(function () {
        pageBlockDetailsIds.push($(this).attr("id"));
        console.log($(this).attr("id"));
    });

    console.log("pageBlockDetailsIds:", pageBlockDetailsIds);

    $.ajax({
        type: "POST",
        url: _baseUrl + "admin/ajax/pageBlockDetailSort",
        data: {
            page_block_id: $("#PageBlockID").val(),
            pageBlockDetailsIds: pageBlockDetailsIds,
            _token: $('meta[name="csrf-token"]').attr("content"),
        },
        dataType: "json",
        success: function (result) {
            $.notify(result.message, "success");
        },
    });
}

$(function () {
    // fetchPages();
});

// function fetchPages() {

//     $.ajax({
//         type: 'get',
//         url: _baseUrl + "admin/ajax/pages",
//         dataType: "json",
//         success: function (result) {

//             availableTags = result

//             $('.page-block-detail').autocomplete({
//                 source: availableTags,
//                 minLength: 1,
//                 select: function (event, ui) {

//                     console.log(ui.item)
//                     // savePageBlockDetail(ui.item.value, ui.item.label);
//                 }
//             });
//         }
//     });
// }

function PageBlockDetail(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: _baseUrl + "admin/ajax/addPageBlockDetail",
            data: {
                title: $(".page-block-detail").val(),
                page_block_id: $("#PageBlockID").val(),
                page_link_id: $("#page-link-id").val(),
                _token: $('meta[name="csrf-token"]').attr("content"),
            },
            dataType: "json",
            success: function (result) {
                var blockDeatil =
                    '<div id="' +
                    result.data.searchResults.id +
                    '" style="display: inline-block; margin-right: 6px;" class="p-2 mt-1 border border-2 rounded list-page-block-detail"><span class="p-2">' +
                    result.data.link +
                    '</span><i class="bi bi-x-circle-fill" style="cursor: pointer;" onclick="deleteBlockDetail(' +
                    // + '<a href="' + _baseUrl + '/p/' + result.data.searchResults.title + '">' + result.data.searchResults.id + '</a>'
                    ')"></i>' +
                    "</div>";

                $(".page-block-detail").val("");
                $(".assigned-block-deatils").append(blockDeatil);
                $.notify(result.message, "success");
            },
            error: function (result) {
                $.notify(result.statusText, "error");
            },
        });
    }
}

function deleteBlockDetail(id) {
    $.ajax({
        type: "POST",
        url: _baseUrl + "admin/ajax/removePageBlockDetail",
        data: {
            id: id,
            _token: $('meta[name="csrf-token"]').attr("content"),
        },
        dataType: "json",
        success: function (result) {
            $("div.list-page-block-detail#" + id).remove();
            $.notify(result.message, "success");
        },
        error: function (result) {
            $.notify(result.statusText, "error");
        },
    });
}

function deletePage(id) {
    swal({
        title: "Are you sure?",
        text: "Do you want to remove the record",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "POST",
                url: _baseUrl + "admin/ajax/removePageBlock",
                data: {
                    id: id,
                    _token: $('meta[name="csrf-token"]').attr("content"),
                },
                dataType: "json",
                success: function (response) {
                    swal(response.message, {
                        icon: "success",
                    }).then(function () {
                        location.reload();
                    });
                },
                error: function (response) {
                    swal(response.statusText, {
                        icon: "error",
                    });
                },
            });
        } else {
            swal("Cancelled", "Your record is safe", "error");
        }
    });
}

function savePageBlockDetail(partnerID, PartnerName) {
    var _token = $('meta[name="csrf-token"]').attr("content");

    $.ajax({
        type: "post",
        url: _baseUrl + "admin/ajax/savePartnerBidder",
        data: {
            bidder_id: $("#bidderID").val(),
            partner_id: partnerID,
            _token: _token,
        },
        dataType: "json",
        success: function (result) {
            var partner =
                '<div id="' +
                partnerID +
                '" style="border:1px solid black; display: inline-block; margin-bottom: 10px;">' +
                PartnerName +
                "</div>";
            $(".bidder-related-partners").append(partner);
        },
        error: function (result) {
            $.notify(
                "cannot assign duplicate partners to same bidder",
                "error"
            );
        },
    });
}
