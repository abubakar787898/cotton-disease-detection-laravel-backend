//Get Auto address and its components
var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("address"), {
        types: ['geocode']
    }
);
google.maps.event.addListener(autocomplete, "place_changed", function () {

    console.log('autocomplete');

    var place = autocomplete.getPlace();
    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    $("#lat").val(latitude);
    $("#long").val(longitude);
    $("#address").val(place.formatted_address);
    var components = place.address_components;
    for (var i = 0, component; (component = components[i]); i++) {
        //Get Country of address
        if (component.types[0] === "country") {
            var country = component["long_name"];
            $("#country").val(country);
        }
        //Get City of address
        if (
            component.types[0] == "locality" &&
            component.types[1] == "political"
        ) {
            var city = component["long_name"];
            $("#city").val(city);
        }

        //Get state of address
        if (
            component.types[0] == "administrative_area_level_1" &&
            component.types[1] == "political"
        ) {
            var state = component["long_name"];
            $("#state").val(state);
        }

        //Get Postal Code of address
        if (component.types[0] === "postal_code") {
            var postal_code = component["long_name"];
            $("#post_code").val(postal_code);
        }
    }
});
