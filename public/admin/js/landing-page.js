var searchListModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});

$(function () {
    initMap();

    fetchSpecification($('#category_id').val())
});


$('#exampleModal').on('hidden.bs.modal', function () {
    $('#category_specification_id').html('');
});

$('#category_id').on('change', function () {
   fetchSpecification(this.value, null)
});

function fetchSpecification(cat_id, category_specification_id) {
    $.ajax({
        type: "POST",
        url: _baseUrl + "admin/ajax/getCategories",
        data: {
            category_id: cat_id,
            _token: $('meta[name="csrf-token"]').attr('content'),
        },
        dataType: 'json',
        success: function (result) {
            var specifications = '<option value="0" selected> --------Select Specification-------- </option>';
            for (var i = 0; i < result.data.searchResults.length; i++) {
                specifications += '<option value="' + result.data.searchResults[i].id + '"> ' + result.data.searchResults[i].title + '</option>';
            }

            $('#category_specification_id').html(specifications);

            if(category_specification_id != null) $('#category_specification_id').val(category_specification_id);
            
        },
        error: function (result) {
            console.log('error');
        },
    });
}

function initEditSearchList(list) {

    console.log('list');
    console.log(list);

    // reset form
    if (list) {

        list = JSON.parse(list)

        fetchSpecification(list.category_id, list.category_specification_id)
        // $('#category_specification_id').val(list.category_specification_id)

        $('#page_search_id').val(list.id)
        $('#title').val(list.title)
        $('#radius').val(list.radius)
        $('#category_id').val(list.category_id)
        $('#event_id').val(list.event_id)
        $('#lat').val(list.lat)
        $('#long').val(list.long)

    } else {

        $('#page_search_id').val(null)
        $('#title').val(null)
        $('#radius').val(null)
        $('#category_id').val(null)
        $('#event_id').val(null)
        $('#category_specification_id').val(null)
        $('#lat').val(null)
        $('#long').val(null)

    }

    searchListModal.show()

    initMap();

}


function initMap() {

    const element = document.getElementById("map_canvas")
    var lat = $('#lat').val() == '' ? 56.17312 : $('#lat').val()
    var long = $('#long').val() == '' ? 10.017085 : $('#long').val()
    // const element = $('#map_canvas')

    console.log('lat', 'long');
    console.log(lat, long);

    var map = new google.maps.Map(element, {
        zoom: 10,
        center: new google.maps.LatLng(lat, long),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });


    var myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        draggable: true,
    });

    google.maps.event.addListener(myMarker, "dragend", function (evt) {
        // $("#current").html(
        //     "<p>Marker dropped: Current Lat: " +
        //         evt.latLng.lat().toFixed(3) +
        //         " Current Lng: " +
        //         evt.latLng.lng().toFixed(3) +
        //         "</p>"
        // );
        $("#current").innerHTML =
            "<p>Marker dropped: Current Lat: " +
            evt.latLng.lat().toFixed(3) +
            " Current Lng: " +
            evt.latLng.lng().toFixed(3) +
            "</p>";
        $("#lat").val(evt.latLng.lat());
        $("#long").val(evt.latLng.lng());
    });

    google.maps.event.addListener(myMarker, "dragstart", function (evt) {
        // $("#current").html("<p>Currently dragging marker...</p>");
    });

    map.setCenter(myMarker.position);
    myMarker.setMap(map);
}

function cloneSearch() {
    $("#search-list-div").append($("#search-list-params").clone());
}
