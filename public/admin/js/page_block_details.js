
$(document).ready(function() {
    $('.data-table').DataTable({
        "ordering": false
    });
});

function deletePage(id) {

    swal({
        title: "Are you sure?",
        text: "Do you want to remove the record",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "POST",
                url: _baseUrl + "admin/ajax/removePageBlockDetail",
                data: {
                    id: id,
                    _token: $('meta[name="csrf-token"]').attr('content'),
                },
                dataType: 'json',
                success: function(response) {
                    swal(response.message, {
                    icon: "success",
                 })
                 .then(function() {
                    location.reload();
                });

                },
                error: function(response) {
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
