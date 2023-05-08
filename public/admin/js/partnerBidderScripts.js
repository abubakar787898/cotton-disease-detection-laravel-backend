/*!
 * Start Bootstrap - SB Admin v7.0.1 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-partner/blob/master/LICENSE)
 */
//
// Scripts
//

var formInitValues = [];

window.addEventListener("DOMContentLoaded", (event) => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.classList.toggle("sb-sidenav-toggled");
            localStorage.setItem(
                "sb|sidebar-toggle",
                document.body.classList.contains("sb-sidenav-toggled")
            );
        });
    }

    // Saving valuesform values to alert for lost changes
    $(".cat-form").each(function() {
        // formInitValues.push($(this).serialize());
        formInitValues.push($($(this)[0].elements).not(".dates").serialize());
        // $($("#myform")[0].elements).not(".class_name")
    });

    $( "#cat-tabs" ).tabs({

        // beforeActivate: function(event, ui) {

        //     console.log(ui.oldTab.index(), ui.newTab.index())

        //     if(formChanged(ui.oldTab.index())) {
                
        //         var r = confirm("You don\'t want to save the changes?");
        //         if (r == true) {
        //         } else {
        //             return false;
        //         }

        //     }
        // },
    });

});

function onlyOneYes_1() {
    if ($(".night_facility_yes_bx1").is(":checked")) {
        $(".night_facility_yes_1").css("display", "block");
        $(".night_facility_no_1").css("display", "none");
    }
}

function onlyOneNo_1() {
    if ($(".night_facility_no_bx1").is(":checked")) {
        $(".night_facility_yes_1").css("display", "none");
        $(".night_facility_no_1").css("display", "block");
    }
}

function onlyOneYes_2() {
    if ($(".night_facility_yes_bx2").is(":checked")) {
        $(".night_facility_yes2").css("display", "block");
        $(".night_facility_no2").css("display", "none");
    }
}

function onlyOneNo_2() {
    if ($(".night_facility_no_bx2").is(":checked")) {
        $(".night_facility_yes2").css("display", "none");
        $(".night_facility_no2").css("display", "block");
    }
}

$('input[type="checkbox"]')
    .on("change", function () {
        this.value = this.checked ? 1 : 0;
    })
    .change();

    // Add distance location info
    $(document)
    .off("click", ".delete-bidder-location-distance")
    .on("click", ".delete-bidder-location-distance", function (e) {
        var id = $(this).attr("rel");
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                $.ajax({
                    type: "POST",
                    url: "/partner/bidder-location-distance/delete",
                    headers: {
                        "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                            "content"
                        )
                    },
                    data: {
                        id: id
                    },
                    async: false,
                    success: function () {
                        swal("Your record has been deleted!", {
                            icon: "success"
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    }
                });
            } else {
                swal("Your record is safe!");
            }
        });
    });

// Add location distacne stuff
$(document).on("click", ".addmore_beliggenhed-afstand_button", function () {
    var html =
        '<div class="row"><div class="col-6"><label class="form-check-label" for="exampleCheck4">Beliggenhed*</label><input type="text" class="form-control" placeholder="" name="bidder_location[]" id=""></div><div class="col-5"><label class="form-check-label" for="exampleCheck4">Afstand kvm*</label><input type="number" class="form-control" placeholder="Km." name="bidder_distance[]" id=""></div><div class="col-1" style="position: relative;"><span class="removelocationdistanceDiv">X</span></div></div>';
    $(html)
        .clone()
        .appendTo(".location-distance");

    $(document).on("click", ".removelocationdistanceDiv", function () {
        $(this)
            .parent()
            .parent()
            .remove();
    });
});

$(document).ready(function () {
    datatable();
    editor();
    updateTabsState();
    var buttonAdd = $(".add-button-field");
    var buttonRemove = $(".remove-button-field");
    var className = ".dynamic-field";
    var count = 0;
    var field = "";
    var maxFields = 4;

    function totalFields() {
        return $(className).length;
    }

    function addNewField(parentDiv, r_id) {
        var html =
            '<div class="form-group dynamic-field row"> <div class="col"><label for="field" class="font-weight-bold">Navn på opstilling</label> <input type="text" class="form-control" name="room_table_name[' +
            r_id +
            '][]"/> </div><div class="col"><label for="field" class="font-weight-bold">Maks antal gæster</label> <input type="number" class="form-control" name="room_table_max_guests[' +
            r_id +
            '][]"/></div> <span class="removeroomDivSettings btn-rm">X</span></div>';
        $(html).clone().appendTo(parentDiv);
        //    $(parentDiv).after($(field))
    }

    function removeLastField(parentDiv) {
        if (parentDiv.children().length > 0) {
            parentDiv.children().last().remove();
        }
    }

    function enableButtonRemove(parentDiv, removeButton) {
        if (parentDiv.children().length > 0) {
            removeButton.removeAttr("disabled");
            removeButton.addClass("shadow-sm");
        }
    }

    // save general information of rooms

    $(document).on("click", ".addmore_button", function () {
        // var html =
        //     '<div class="localer-box"> <span class="removeroomDiv">X</span><div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Title*</label> <input type="text" class="form-control" placeholder="" name="bidder_room_title[]" id=""> </div></div><div class="row"> <div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Minimum antalb gæster i lokalet*</label> <input type="number" class="form-control" name="bidder_room_min_guests[]" id=""> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Maksimum antal gæster i lokalet*</label> <input type="number" class="form-control" name="bidder_room_max_guests[]" id=""> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Antal kvm*</label> <input type="number" class="form-control" placeholder="Km." name="bidder_room_area[]" id=""> </div></div></div><div class="col-lg-3"> <div class="row"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea name="bidder_room_description[]" class="fancy-editor" cols="25" rows="5"></textarea> </div></div></div><div class="col-lg-5"> <div class="row"> <div class="col-1g-12"> <strong>Lokalets formål og opstillinger</strong> <div class="row mt-3"> <div class="col-lg-5"> <input type="checkbox" name="room_category_one_id[]" class="form-check-input"> <label for="room_category_id_1">Fest og selskab*</label> </div><div class="col-lg-7"> <input type="checkbox" name="room_category_two_id[]" class="form-check-input"> <label for="room_category_id_2">Møde og konference*</label> </div></div></div></div></div></div><div class="row mt-5"> <div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_button">Add More Lokaler</button> </div></div></div></div></div>'
        var uid = uidGenerator();

        var html = `<div id="localer-box-` + uid + `" class="localer-box dynamic">
            <div class="row">
                <div class="row mt-3">
                    <div class="checkbox-group required">
                        <input type="checkbox" name="room_category_one_id[]" class="form-check-input"> <label for="room_category_id_1">Fest og selskab*</label> </div>
                    <div class="col-lg-7"> <input type="checkbox" name="room_category_two_id[]" class="form-check-input"> <label for="room_category_id_2">Møde og konference*</label>
                    </div>
                </div>

                <div id="" class="tabs">
                    <ul>
                        <li><a href="#tabs-1"><i class="bi bi-door-open"></i> General</a></li>
                        <li><a href="#tabs-2"><i class="bi bi-sliders"></i> Bordestilling</a></li>
                        <li><a href="#tabs-3"><i class="bi bi-images"></i> Billeder</a></li>
                    </ul>
                    <div id="tabs-1">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="col-lg-12">
                                    <label class="form-check-label" for="exampleCheck4">Title</label>
                                    <input type="text" class="form-control" name="bidder_room_title[]" value="">
                                                                                </div>
                                <div class="col-lg-6">
                                    <label class="form-check-label" for="exampleCheck4">Minimum
                                        antalb gæster i
                                        lokalet</label>
                                    <input type="number" class="form-control" name="bidder_room_min_guests[]" value="">
                                                                                </div>
                                <div class="col-lg-6">
                                    <label class="form-check-label" for="exampleCheck4">Maksimum
                                        antal gæster i
                                        lokalet</label>
                                    <input type="number" class="form-control" name="bidder_room_max_guests[]" value="">
                                                                                </div>
                                <div class="col-lg-6">
                                    <label class="form-check-label" for="exampleCheck4">Antal
                                        kvm</label>
                                    <input type="number" class="form-control" placeholder="Km." name="bidder_room_area[]" value="">
                                                                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="col-lg-12">
                                    <strong>Beskrivelse</strong>
                                    <textarea class="fancy-editor" name="bidder_room_description[]"
                                        id="bidder_room_description" cols="25"
                                        rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="justify-content-end">
                                <button id=`+uid+` type="button" class="btn btn-sm btn-primary save-general" onclick="saveGeneral(` + uid + `)">Save general</button> &nbsp;
                            </div>
                        </div>
                    </div>
                    <div id="tabs-2" >
                        <div class="row">
                            <div class="col-1g-12">
                                <strong>Lokalets formål og
                                    opstillinger</strong>

                                <div class="rooms-box">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="container my-4">
                                                <div class="card my-4 shadow" style="overflow: scroll;height: 300px;">
                                                    <div class="card-body">
                                                                                                                                                                                            <div class="form-group dynamic-field">
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <label for="field" class="font-weight-bold">Navn
                                                                            på
                                                                            opstilling</label>
                                                                        <input type="text" class="form-control" name="room_table_name[59][]">
                                                                    </div>
                                                                    <div class="col-lg-6">
                                                                        <label for="field" class="font-weight-bold">Maks
                                                                            antal
                                                                            gæster</label>
                                                                        <input type="number" class="form-control" name="room_table_max_guests[59][]">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                        <div class="field-wrapper"></div>
                                                        <div class="clearfix mt-4">
                                                            <button type="button" class="btn btn-secondary float-left text-uppercase shadow-sm add-button-field" rel="59"><svg class="svg-inline--fa fa-plus fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus fa-fw"></i> Font Awesome fontawesome.com -->
                                                                Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tabs-3">
                    </div>
                </div>

                <div class="col-lg-5">

                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="buttons">
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-sm btn-primary addmore_button">Add
                                More Lokaler</button> &nbsp;
                                <button rel="`+uid+`" type="button" class="btn btn-sm btn-danger deleteRoomBtn" disabled>Delete
                                        Lokaler</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        $(html).clone().appendTo(".lbx-wrapper");

        $(document).on("click", ".removeroomDiv", function () {
            $(this).parent().remove();
        });
        // reinitailize tinymce editor
        tinymce.remove();
        editor();

        $("#rooms-container .tabs").tabs();

        updateTabsState();
    });

    $(document).on('click', '.addmore_ref', function () {
        var html =
            '<div class="reference-box"> <span class="removeroomDiv">X</span><div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Reference*</label> <input type="text" class="form-control" name="reference_title[]"> </div></div><div class="row mb-3"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Reference video*</label> <input type="text" class="form-control" name="refrence_video_link[]"> </div><div class="col-lg-12 image-selector"> <label class="form-check-label" for="exampleCheck4">Reference billede</label> <br><button class="close btn btn-danger" rel="" style="display: none" type="button">×</button> <img src="https://static.thenounproject.com/png/104062-200.png" style="width: 100%;"> <input type="hidden" class="image-hdnField" name="refrence_image[]" value=""> <input type="hidden" name="refmg_title[]" class="title"> <input type="hidden" name="refmg_link[]" class="link"> <input type="hidden" name="refmg_description[]" class="description"> </div></div></div><div class="col-lg-8"> <div class="row mb-3"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea class="fancy-editor" name="reference_description[]" cols="25" rows="5"></textarea> </div></div></div><div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_ref">Add More Reference</button> </div></div></div></div></div>'
        $(html)
            .clone()
            .appendTo('.reference-wrapper')

        $(document).on('click', '.removeroomDiv', function () {
            $(this)
                .parent()
                .remove()
        })
        // reinitailize tinymce editor
        tinymce.remove()
        editor()
    })

/// Dlete Fucntion for Facilites subheaders of Category 1 and 2
$(document)
    .off('click', '.deleterefBtn')
    .on('click', '.deleterefBtn', function (e) {
        var id = $(this).attr('rel')
        e.preventDefault()
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover it again!',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                $.ajax({
                    type: 'POST',
                    url: '/admin/bidder-reference/delete',
                    headers: {
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr(
                            'content'
                        )
                    },
                    data: {
                        id: id
                    },
                    async: false,
                    success: function () {
                        swal('Your record has been deleted!', {
                            icon: 'success'
                        })
                        setTimeout(function () {
                            location.reload()
                        }, 300)
                    }
                })
            } else {
                swal('Your record is safe!')
            }
        })
    })

    $(document).on("click", ".removeroomDivSettings", function () {
        let id = $(this).attr("rel");
        if (id) {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover it again!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        type: "POST",
                        url: "/partner/bidder-room-settings/delete",
                        headers: {
                            "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        data: {
                            id: id,
                        },
                        async: false,
                        success: function () {
                            swal("Your record has been deleted!", {
                                icon: "success",
                            });
                            setTimeout(function () {
                                location.reload();
                            }, 300);
                        },
                    });
                } else {
                    swal("Your record is safe!");
                }
            });
        } else {
            $(this).parent().remove();
        }
    });

    $(document).on("click", ".addmore_button_packages", function () {
        var html =
            ' <div class="localer-box"><span class="removeroomDiv">X</span> <div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Pakketype*</label> <input type="text" class="form-control" placeholder="" name="package_title[]" id=""> </div></div><div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Minimum antalb gæster*</label> <input type="number" class="form-control" name="package_min_guests[]" placeholder="Tal"> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Pris*</label> <input type="text" class="form-control" placeholder="DKK" name="package_price[]"> <select class="form-control" id=""> <option value="inkl">inkl.moms</option> </select> </div></div></div><div class="col-lg-8"> <div class="row"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea name="package_description[]" class="fancy-editor" cols="25" rows="5"></textarea> </div></div></div></div><div class="row mt-5"> <div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_button_packages">Add More Pakker</button> </div></div></div></div></div>';
        $(html).clone().appendTo(".lbx-wrapper");

        $(document).on("click", ".removeroomDiv", function () {
            $(this).parent().remove();
        });

        tinymce.remove();
        editor();
        updateTabsState();
    });

    $(document).on("click", ".addmore_button_packages_cat4", function () {
        var html =
            '<div class="localer-box"><span class="removeroomDiv">X</span> <div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Pakketype*</label> <input type="text" class="form-control" placeholder="" name="package_title[]" id=""> </div></div><div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Minimum antalb gæster*</label> <input type="number" class="form-control" name="package_min_guests[]" placeholder="Tal"> </div><div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Maksimum antal deltagere*</label> <input type="number" class="form-control" name="package_max_guests[]" placeholder="Tal"> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Pris*</label> <input type="text" class="form-control" placeholder="DKK" name="package_price[]" id=""> <select class="form-control" id=""> <option value="inkl">inkl.moms</option> </select> </div><div class="col-lg-12"> <div class="mb-3 form-check"> <input type="checkbox" name="offers_location[]" class="form-check-input"> <label class="form-check-label" for="">Eventbureauet tilbyder lokation for dette event</label> </div></div><div class="col-lg-12"> <div class="mb-3 form-check"> <input type="checkbox" name="at_customer_end[]" class="form-check-input"> <label class="form-check-label" for="">Dette event kan afholdes ude hos kunden</label> </div></div></div></div><div class="col-lg-8"> <div class="row"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea name="package_description[]" class="fancy-editor" cols="25" rows="5"></textarea> </div></div></div></div><div class="row mt-3"> <div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_button_packages_cat4">Add More Pakker</button> </div></div></div></div></div>';
        $(html).clone().appendTo(".lbx-wrapper");

        $(document).on("click", ".removeroomDiv", function () {
            $(this).parent().remove();
        });

        tinymce.remove();
        editor();
    });

    $(document).on("click", ".addFacilities", function () {

        alert('Clicked on it');

        let facilityID = $(this).attr("rel");
        var html =
            '<div class="field-clone mt-3"><input type="text" name="fcsubheader_' +
            facilityID +
            '[]"><a class="delete-fac">-</a></div>';
        let limit = 5;
        let check = $(this)
            .parent()
            .parent()
            .find(".InputsWrapper")
            .find(".dbfield").length;
        let cloneLength = $(this)
            .parent()
            .parent()
            .find(".clone-wrapper")
            .find(".field-clone").length;
        let totalCheck = parseInt(check + cloneLength);
        if (totalCheck < limit) {
            $(html)
                .clone()
                .appendTo($(this).parent().parent().find(".clone-wrapper"));
        } else {
            swal({
                icon: "error",
                title: "Oops...",
                text: "Maximum limit reached you can add maximum 5!",
            });
        }

        $(document).on("click", ".delete-fac", function () {
            $(this).parent().remove();
        });
    });

    $(document).on('change', '.category_facilities', function () {
        if (this.checked) {
            $(this)
                .parent()
                .find('.facilities-headers')
                .show()
        } else {
            $(this)
                .parent()
                .find('.facilities-headers')
                .hide()
        }
    })

    // $(document).on("change", ".category_facilities", function () {
    //     if (this.checked) {
    //         $(this).parent().find(".facilities-headers").show();
    //     } else {
    //         $(this).parent().find(".facilities-headers").hide();
    //     }
    // });
    function disableButtonRemove(parentDiv, removeButton) {
        if (parentDiv.children().length <= 1) {
            removeButton.attr("disabled", "disabled");
            removeButton.removeClass("shadow-sm");
        }
    }

    function disableButtonAdd(parentDiv, addButton) {
        if (parentDiv.children().length >= maxFields) {
            addButton.attr("disabled", "disabled");
            addButton.removeClass("shadow-sm");
        }
    }

    function enableButtonAdd(parentDiv, addButton) {
        if (parentDiv.children().length <= maxFields) {
            addButton.removeAttr("disabled");
            addButton.addClass("shadow-sm");
        }
    }

    $(document).on("click", ".add-button-field", function () {
        let r_id = $(this).attr("rel");
        var removeButton = $(this).parent().find(".remove-button-field");
        var addButton = $(this).parent().find(".add-button-field");
        var parentDiv = $(this).parent().parent().find(".field-wrapper");
        addNewField(parentDiv, r_id);
        enableButtonRemove(parentDiv, removeButton);
        disableButtonAdd(parentDiv, addButton);
    });

    $(document).on("click", ".remove-button-field", function () {
        var removeButton = $(this).parent().find(".remove-button-field");
        var addButton = $(this).parent().find(".add-button-field");
        var parentDiv = $(this).parent().parent().find(".field-wrapper");

        removeLastField(parentDiv);
        disableButtonRemove(parentDiv, removeButton);
        enableButtonAdd(parentDiv, addButton);
    });
    var status = $("#leadStatus").find(":selected").val();
    if (status == "waiting") {
        $(".lead-circle").css("color", "red");
    }
    if (status == "pending") {
        $(".lead-circle").css("color", "var(--bs-warning)");
    }
    if (status == "success") {
        $(".lead-circle").css("color", "var(--bs-success)");
    }
    if (status == "deleted") {
        $(".lead-circle").css("color", "black");
    }
    // if (status == 'waiting') {
    //     $('.lead-circle').css('color', 'var(--bs-orange)')
    // }

    $("#leadStatus").change(function () {
        if ($(this).val() == "waiting") {
            $(".lead-circle").css("color", "red");
        }
        if ($(this).val() == "pending") {
            $(".lead-circle").css("color", "var(--bs-warning)");
        }
        if ($(this).val() == "success") {
            $(".lead-circle").css("color", "var(--bs-success)");
        }
        if ($(this).val() == "deleted") {
            $(".lead-circle").css("color", "black");
        }
    });

    if ($(".night_facility_yes_bx1").is(":checked")) {
        $(".night_facility_yes_1").css("display", "block");
        $(".night_facility_no_1").css("display", "none");
    } else if ($(".night_facility_no_bx1").is(":checked")) {
        $(".night_facility_yes_1").css("display", "none");
        $(".night_facility_no_1").css("display", "block");
    }

    if ($(".night_facility_yes_bx2").is(":checked")) {
        $(".night_facility_yes2").css("display", "block");
        $(".night_facility_no2").css("display", "none");
    } else if ($(".night_facility_no_bx2").is(":checked")) {
        $(".night_facility_yes2").css("display", "none");
        $(".night_facility_no2").css("display", "block");
    }

    $(".category_facilities").each(function () {
        if (this.checked) {
            $(this).parent().find(".facilities-headers").show();
        } else {
            $(this).parent().find(".facilities-headers").hide();
        }
    });
});

/// Dlete Fucntion for Gallery Image
$(document)
    .off("click", ".gallery-image-delete")
    .on("click", ".gallery-image-delete", function (e) {
        var id = $(this).attr("rel");
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: "POST",
                    url: "/partner/gallery-image/delete",
                    headers: {
                        "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                            "content"
                        ),
                    },
                    data: {
                        id: id,
                    },
                    async: false,
                    success: function () {
                        swal("Your record has been deleted!", {
                            icon: "success",
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    },
                });
            } else {
                swal("Your record is safe!");
            }
        });
    });

/// Dlete Fucntion for Facilites subheaders of Category 1 and 2
$(document)
    .off("click", ".close")
    .on("click", ".close", function (e) {
        e.preventDefault();
        var id = $(this).attr("rel");
        if (id != "") {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover it again!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        type: "POST",
                        url: "/partner/bidder-image/delete",
                        headers: {
                            "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        data: {
                            id: id,
                        },
                        async: false,
                        success: function () {
                            swal("Your record has been deleted!", {
                                icon: "success",
                            });
                            setTimeout(function () {
                                location.reload();
                            }, 300);
                        },
                    });
                } else {
                    swal("Your record is safe!");
                }
            });
        } else {
            // $(this)
            //     .parent()
            //     .find("img")
            //     .attr(
            //         "src",
            //         "https://static.thenounproject.com/png/104062-200.png"
            //     );
            // $(this).css("display", "none");

            $(this)
            .parent()
            .find("img")
            .attr(
                "src",
                "https://static.thenounproject.com/png/104062-200.png"
            );

        $(this)
            .parent()
            .find(".title")
            .val("");

        $(this)
            .parent()
            .find(".image-hdnField")
            .val("");

        $(this)
            .parent()
            .find(".link")
            .val("");

        $(this)
            .parent()
            .find(".description")
            .val("");
        $(this).css("display", "none");
        }
    });

$(document)
    .off("click", ".edit")
    .on("click", ".edit", function (e) {
        e.preventDefault();
        var id = $(this).attr("rel");
        var imageID = $(this).attr("rel-img");
        $.ajax({
            type: "POST",
            url: "/partner/bidder-image/details",
            headers: {
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
            },
            data: {
                id: id,
            },
            async: false,
            success: function (data) {
                $("#imagePicker").find("#title").val("");
                $("#imagePicker").find("#link").val("");
                $("#imagePicker").find("#description").val("");
                $("#imagePicker").find("#title").val(data.data.title);
                $("#imagePicker").find("#link").val(data.data.link);
                $("#imagePicker")
                    .find("#description")
                    .val(data.data.description);

                //Setting active image in Modal
                $(".tile-picker").each(function (i, obj) {
                    $(this).removeClass("active");
                    $(this).find(".picker-check").val(0);
                    $(this).find(".tile-checked").css("display", "none");
                    currentID = $(this).find("img").attr("rel");
                    if (imageID == currentID) {
                        $(this).addClass("active");
                        $(this).find(".picker-check").val(1);
                        $(this).find(".tile-checked").show();
                    }
                });
                $("#imagePicker").modal("show");
            },
        });
    });

/// Dlete Fucntion for Facilites subheaders of Category 1 and 2
$(document)
    .off("click", ".dbfcdlt")
    .on("click", ".dbfcdlt", function (e) {
        var id = $(this).attr("rel");
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: "POST",
                    url: "/partner/bidder-facility/delete",
                    headers: {
                        "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                            "content"
                        ),
                    },
                    data: {
                        id: id,
                    },
                    async: false,
                    success: function () {
                        swal("Your record has been deleted!", {
                            icon: "success",
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    },
                });
            } else {
                swal("Your record is safe!");
            }
        });
    });

/// Dlete Price Packages for Catrgories
$(document)
    .off("click", ".deletepkgBtn")
    .on("click", ".deletepkgBtn", function (e) {
        var id = $(this).attr("rel");
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: "POST",
                    url: "/partner/price-pkg/delete",
                    headers: {
                        "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                            "content"
                        ),
                    },
                    data: {
                        id: id,
                    },
                    async: false,
                    success: function () {
                        swal("Your record has been deleted!", {
                            icon: "success",
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    },
                });
            } else {
                swal("Your record is safe!");
            }
        });
    });

/// Dlete Function for Rooms/ Localer
$(document)
    .off("click", ".deleteRoomBtn")
    .on("click", ".deleteRoomBtn", function (e) {

        var id = $(this).attr("rel");
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: "POST",
                    url: "/partner/bidder-room/delete",
                    headers: {
                        "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                            "content"
                        ),
                    },
                    data: {
                        id: id,
                    },
                    async: false,
                    success: function () {
                        swal("Your record has been deleted!", {
                            icon: "success",
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    },
                });
            } else {
                swal("Your record is safe!");
            }
        });
    });

// global datatable drawing
function datatable() {
    $(".data-table").DataTable();
}

function deleteCustomCatSpec(id, elem) {
    if (typeof id === "undefined" || id === 0) {
        // simple delete
        $(elem).parent().parent().remove();
        return false;
    }

    swal({
        title: "Are you sure?",
        text: "You will not be able to recover it again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "POST",
                url: "/partner/bidder-cat-spec/delete",
                headers: {
                    "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                data: {
                    id: id,
                },
                async: false,
                success: function () {
                    swal("Your record has been deleted!", {
                        icon: "success",
                    });

                    $(elem).parent().parent().remove();

                    // setTimeout(function () {
                    //     location.reload()
                    // }, 300)
                },
            });
        } else {
            swal("Your record is safe!");
        }
    });
}

function addCustomSpecRow(catId) {
    var customSpecLimit = 5;

    if ($(".custom-specs-input-" + catId).length >= customSpecLimit) {
        $.notify(
            "Cant add more than " + customSpecLimit + " Limit has reached",
            "info"
        );
        return;
    }

    var html =
        `<div class="">
            <div class="mb-3">
                <input type="text"
                    name="custom_category_specs[]"
                    placeholder="Please type custom specification"
                    class="custom-specs-input-` +
        catId +
        `">
                    <button type="button" class="btn btn-danger btn-sm"
                        onClick="deleteCustomCatSpec(0, this)" >X</button>
            </div>
        </div>`;

    $("#custom-cat-spec-" + catId).append(html);
}

function editor() {

    tinymce.init({
        selector: ".fancy-editor",
        height: 200,
        menubar: false,
        theme: "modern",
        // plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
        // toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | code',
        plugins:
            "print contextmenu preview autolink fullscreen template codesample lists",
        // toolbar: "undo redo | formatselect | link | bullist",
        toolbar: "undo redo | bold | bullist",
        image_advtab: true,
        content_css: [
            "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i"
        ]
    });

    // tinymce.init({
    //     selector: ".fancy-editor",
    //     height: 200,
    //     theme: "modern",
    //     plugins:
    //         "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools  contextmenu colorpicker textpattern help",
    //     toolbar1:
    //         "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | code",
    //     image_advtab: true,
    //     templates: [
    //         { title: "Test template 1", content: "Test 1" },
    //         { title: "Test template 2", content: "Test 2" },
    //     ],
    //     content_css: [
    //         "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
    //         // "//www.tinymce.com/css/codepen.min.css",
    //     ],
    // });
}

$(".image-selector img").click(function () {
    $(".image-selector").removeClass("currentActive");
    $(this).parent().addClass("currentActive");
    $("#imagePicker").find("#title").val("");
    $("#imagePicker").find("#link").val("");
    $("#imagePicker").find("#description").val("");
    $("#imagePicker").modal("show");
});

$(".modal-close").click(function () {
    $(".tile-picker").removeClass("active");
    $(".tile-checked").css("display", "none");
    $("#imagePicker").modal("hide");
});

$(".img-select").click(function () {
    var parent = $(this).parent().parent().find(".active").find(".picker-img");
    var imageLink = parent.attr("src");
    var imageID = parent.attr("rel");
    var title = $("#title").val();
    var link = $("#link").val();
    var description = $("#description").val();
    if (imageLink != undefined) {
        let selectedDiv = $(".currentActive").find("img");
        selectedDiv.attr("src", imageLink);
        $(".currentActive").find(".close").css("display", "block");
        let hdnField = $(".currentActive").find(".image-hdnField");
        hdnField.val(imageID);
        $(".currentActive").find(".title").val(title);
        $(".currentActive").find(".link").val(link);
        $(".currentActive").find(".description").val(description);
        $(".tile-picker").removeClass("active");
        $(".tile-checked").css("display", "none");
        $("#imagePicker").modal("hide");
    } else {
        swal("Please Select image!");
    }
});

$(document).on("click", ".tile-picker input", function (e) {
    if ($(this).is(":checked")) {
        $(".picker-check").val(0);
        $(".tile-checked").css("display", "none");
        $(".tile-picker").removeClass("active");
        $(this).closest(".tile-picker").addClass("active");
        $(this)
            .closest(".tile-picker")
            .find(".tile-checked")
            .css("display", "block");
    } else {
        $(".tile-checked").css("display", "none");
        $(this).closest(".tile-picker").removeClass("active");
        $(this)
            .closest(".tile-picker")
            .find(".tile-checked")
            .css("display", "none");
    }
});

function uidGenerator() {

    return Math.floor(Math.random() * 26) + Date.now()

}

function formChanged(id) {

    tinyMCE.triggerSave(true);

    console.log($('#cat-form-' + (id + 1*1)).serialize());
    console.log(formInitValues[id]);

    if ($($('#cat-form-' + (id + 1*1))[0].elements).not(".dates").serialize() == formInitValues[id]) {
        return false;
    } else {
        return true;
    }

}
