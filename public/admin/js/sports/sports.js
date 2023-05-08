$(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#createUpdatSportsModal, #showSportsModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.sports-datatable').DataTable();

    // $('.sports-datatable').DataTable({
    //     "processing": true,
    //     "serverSide": true,
    //     "ajax": "sports",
    //     "columns": [{
    //             "data": "id",
    //             render: function(data, type, row) {
    //                 return row.DT_RowIndex;
    //             }
    //         },
    //         {
    //             "data": "name"
    //         },

    //         {
    //             "data": "action",
    //             orderable: false,
    //             searchable: false,
    //             render: function(data, type, row) {
    //                 return `<div class="d-flex d-flex flex-row justify-content-end">
    //                 <a class="m-1 btn btn-sm btn-primary btn-sports-show" data-bs-toggle="tooltip" title="View" href="javascript:void(0)" id="` + row.id + `">
    //                     <i class="bi bi-eye-fill"></i>
    //                 </a>
    //                 <a class="m-1 btn btn-sm btn-success btn-sports-edit" data-bs-toggle="tooltip" title="Edit" href="javascript:void(0)" id="` + row.id + `">
    //                     <i class="bi bi-pencil-square"></i>
    //                 </a>
    //                 <a class="m-1 btn btn-danger btn-sm delete-from-list" data-bs-toggle="tooltip" title="Delete" href="javascript:void(0)" id="` + row.id + `">
    //                     <i class="fa fa-fw fa-trash"></i>
    //                 </a>
    //             </div>`;
    //             },
    //         },
    //     ],
    // });



    $("#btnSportsCreate").on("click", function() {
        reset('Create');
    });

    $(document).on("click", ".btn-sports-show", function(event) {
        event.preventDefault();
        let id = $(this).attr('id');
        let forloading = '.' + $(this).attr('rel');
        $.ajax({
            url: _baseUrl + 'sports/' + id,
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
                $('.showId').text(id);
                $('.showName').text(result.data.searchResults.name);
                $('#showSportsModal').modal('show');
            },
            error: function(result) {
                if (!!result.responseJSON.errors) {
                    $('#nameValidationMessage').text(result.responseJSON.errors.name);
                } else {
                    $.notify(result.responseJSON.message, "error");
                }
            }
        })
    });

    $(document).on("click", ".btn-sports-edit", function(event) {
        event.preventDefault();
        let id = $(this).attr('id');
        let forloading = '.' + $(this).attr('rel');
        $.ajax({
            url: _baseUrl + 'sports/' + id + '/edit',
            method: "GET",
            data: {
                id: id
            },
            dataType: 'json',

            beforeSend: function() {
                $(forloading).append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('.btn-hotels-edit').attr("disabled", true);

            },

            complete: function() {
                $('.circular-btn-loader').remove();
                $('.btn-hotels-edit').attr("disabled", false);

            },
            success: function(result) {
                $('.id').val(id);
                $('.name').val(result.data.searchResults.name);
                reset('Update');
            },
            error: function(result) {
                if (!!result.responseJSON.errors) {
                    $('#nameValidationMessage').text(result.responseJSON.errors.name);
                } else {
                    $.notify(result.responseJSON.message, "error");
                }
            }
        })
    });

    $('#btnSportsSaveUpdate').on('click', function(event) {
        event.preventDefault();
        var formData = $('#sportsForm').serialize();
        let action = $(this).val().toLowerCase();
        let sportsAction = action == 'create' ? $('#sportsForm').attr('action') : $('#sportsForm').attr('action') + '/' + formData;
        let method = $(this).val().toLowerCase() == 'create' ? 'POST' : 'PUT';
        $.ajax({
            url: _baseUrl + sportsAction,
            method: method,
            data: formData,
            dataType: "json",

            beforeSend: function() {
                $('#btnSportsSaveUpdate').append('<i class="fa fa-spinner fa-spin circular-btn-loader"></i>');
                $('#btnSportsSaveUpdate').attr("disabled", true);
                $("#btnSportsClose").attr("disabled", true);
            },
            complete: function() {
                $('.circular-btn-loader').remove();
                $('#btnSportsSaveUpdate').attr("disabled", false);
                $("#btnSportsClose").attr("disabled", false);
            },

            success: function(result) {
                $.notify(result.message, "success");
                if (action == 'create') {
                    $('#sportsForm')[0].reset();
                }
                //$('.sports-datatable').DataTable().ajax.reload();
                setTimeout(function() {
                    $('#createUpdatSportsModal').modal('hide');
                    location.reload();
                }, delayInMilliseconds);
            },
            error: function(result) {
                if (!!result.responseJSON.errors) {
                    $('#nameValidationMessage').text(result.responseJSON.errors.name);
                } else {
                    $.notify(result.responseJSON.message, "error");
                }
            }
        });
    });

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
                    let sportsAction = $('#sportsForm').attr('action') + '/' + id;
                    $.ajax({
                        url: _baseUrl + sportsAction,
                        method: 'DELETE',
                        data: id,
                        dataType: "json",
                        success: function(result) {
                            $.notify(result.message, "success");
                            //$('.sports-datatable').DataTable().ajax.reload();
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
        $('#btnSportsSaveUpdate').text(action);
        // $('#btnSportsSaveUpdate').append('<span class="spinner-border"></span>');
        $('#btnSportsSaveUpdate').val(action.toLowerCase());
        $('#createUpdatModalLabel').text(action + ' Sports');
        $('#createUpdatSportsModal').modal('show');
    }

    $('#btnSportsClose').on('click', function() {
        $('#nameValidationMessage').text('');
        $('.id').val('');
        $('.name').val('');
        $('#sportsForm')[0].reset();
        $('#createUpdatSportsModal').modal('hide');
    });

    $('#btnShowClose').on('click', function() {
        $('#showSportsModal').modal('hide');
    });
});