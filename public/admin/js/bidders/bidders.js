$(function () {

    fetchBidders();

    $('#example').DataTable();


    // var table = $('#yajra-datatable').DataTable({
    //     processing: true,
    //     serverSide: true,
    //     ajax: "{{ route('admin.bidders.list') }}",
    //     columns: [
    //         {data: 'DT_RowIndex', name: 'DT_RowIndex'},
    //         {data: 'title', name: 'title'},
    //         // {data: 'email', name: 'email'},
    //         // {data: 'username', name: 'username'},
    //         {data: 'phone', name: 'phone'},
    //         // {data: 'dob', name: 'dob'},
    //         {
    //             data: 'action',
    //             name: 'action',
    //             orderable: true,
    //             searchable: true
    //         },
    //     ]
    // });

});

function fetchBidders() {

    alert('fetchBidders');

    $.ajax({
        type: 'get',
        url: _baseUrl + "admin/ajax/bidders",
        success: function(result) {

            console.log('result', result)
            console.log('result', JSON.stringify(result))
            // $("#div1").html(result);

            populateDatable(JSON.stringify(result))

    }});

}

function populateDatable(dataSet) {

    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Title" },
            { title: "Phone" },
            // { title: "Office" },
            // { title: "Extn." },
            // { title: "Start date" },
            // { title: "Salary" }
        ]
    } );

}
