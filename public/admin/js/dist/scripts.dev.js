"use strict";

/*!
 * Start Bootstrap - SB Admin v7.0.1 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//
window.addEventListener('DOMContentLoaded', function (event) {
  // Toggle the side navigation
  var sidebarToggle = document.body.querySelector('#sidebarToggle');

  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', function (event) {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }
});

function onlyOne() {
  if ($('.night_facility_yes_bx').is(':checked')) {
    $('.night_facility_yes').css('display', 'block');
    $('.night_facility_no').css('display', 'none');
  }

  if ($('.night_facility_no_bx').is(':checked')) {
    $('.night_facility_yes').css('display', 'none');
    $('.night_facility_no').css('display', 'block');
  }
}

$('input[type="checkbox"]').on('change', function () {
  this.value = this.checked ? 1 : 0;
}).change();
$(document).ready(function () {
  editor();
  var buttonAdd = $('.add-button-field');
  var buttonRemove = $('.remove-button-field');
  var className = '.dynamic-field';
  var count = 0;
  var field = '';
  var maxFields = 4;

  function totalFields() {
    return $(className).length;
  }

  function addNewField(parentDiv) {
    var html = '<div class="form-group dynamic-field"> <label for="field" class="font-weight-bold">Navn på opstilling</label> <input type="text" id="field" class="form-control" name="room_table_name[]"/> <label for="field" class="font-weight-bold">Maks antal gæster</label> <input type="number" id="field" class="form-control" name="room_table_max_guests[]"/> </div>';
    $(html).clone().appendTo(parentDiv); //    $(parentDiv).after($(field))
  }

  function removeLastField(parentDiv) {
    if (parentDiv.children().length > 0) {
      parentDiv.children().last().remove();
    }
  }

  function enableButtonRemove(parentDiv, nowButton) {
    alert(parentDiv.children().length);

    if (parentDiv.children().length > 0) {
      nowButton.removeAttr('disabled');
      nowButton.addClass('shadow-sm');
    }
  }

  $(document).on('click', '.addmore_button', function () {
    var html = '<div class="localer-box"><span class="removeroomDiv">X</span><div class="localer-box"> <div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Title*</label> <input type="text" class="form-control" placeholder="" name="bidder_room_title[]" id=""> </div></div><div class="row"> <div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Minimum antalb gæster i lokalet*</label> <input type="number" class="form-control" name="bidder_room_min_guests[]" id=""> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Maksimum antal gæster i lokalet*</label> <input type="number" class="form-control" name="bidder_room_max_guests[]" id=""> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Antal kvm*</label> <input type="number" class="form-control" placeholder="Km." name="bidder_room_area[]" id=""> </div></div></div><div class="col-lg-3"> <div class="row"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea name="bidder_room_description[]" id="bidder_room_description" cols="25" rows="5"></textarea> </div></div></div><div class="col-lg-5"> <div class="row"> <div class="col-1g-12"> <strong>Lokalets formål og opstillinger</strong> <div class="row mt-3"> <div class="col-lg-5"> <input type="checkbox" id="room_category_id" name="room_category_one_id[]" class="form-check-input"> <label for="room_category_id_1">Fest og selskab*</label> </div><div class="col-lg-7"> <input type="checkbox" id="room_category_id" name="room_category_two_id[]" class="form-check-input"> <label for="room_category_id_2">Møde og konference*</label> </div></div><div class="rooms-box"> <div class="row"> <div class="col-lg-12"> <div class="container my-4"> <div class="card my-4 shadow"> <div class="card-body"> <div class="form-group dynamic-field"> <label for="field" class="font-weight-bold">Navn på opstilling</label> <input type="text" id="field" class="form-control" name="room_table_name[]"/> <label for="field" class="font-weight-bold">Maks antal gæster</label> <input type="number" id="field" class="form-control" name="room_table_max_guests[]"/> </div><div class="field-wrapper"></div><div class="clearfix mt-4"> <button type="button" class="btn btn-secondary float-left text-uppercase shadow-sm add-button-field"><i class="fas fa-plus fa-fw"></i> Add</button> <button type="button" class="btn btn-secondary float-left text-uppercase ml-1 remove-button-field" disabled="disabled"><i class="fas fa-minus fa-fw"></i> Remove</button> </div></div></div></div></div></div></div></div></div></div></div><div class="row mt-5"> <div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_button">Add More Lokaler</button> </div></div></div></div></div></div>';
    $(html).clone().appendTo('.lbx-wrapper');
    $(document).on('click', '.removeroomDiv', function () {
      $(this).parent().remove();
    });
  });
  $(document).on('click', '.addmore_button_packages', function () {
    var html = ' <div class="localer-box"><span class="removeroomDiv">X</span> <div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Pakketype*</label> <input type="text" class="form-control" placeholder="" name="package_title[]" id=""> </div></div><div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Minimum antalb gæster*</label> <input type="number" class="form-control" name="package_min_guests[]" placeholder="Tal"> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Pris*</label> <input type="text" class="form-control" placeholder="DKK" name="package_price[]"> <select class="form-control" id=""> <option value="1">inkl.moms</option> <option value="0">eksl.moms</option> </select> </div></div></div><div class="col-lg-8"> <div class="row"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea name="package_description[]" class="ckeditor" cols="25" rows="5"></textarea> </div></div></div></div><div class="row mt-5"> <div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_button_packages">Add More Pakker</button> </div></div></div></div></div>';
    $(html).clone().appendTo('.lbx-wrapper');
    $(document).on('click', '.removeroomDiv', function () {
      $(this).parent().remove();
    });
  });
  $(document).on('click', '.addmore_button_packages_cat4', function () {
    var html = ' <div class="localer-box"><span class="removeroomDiv">X</span> <div class="row"> <div class="col-lg-4"> <div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Pakketype*</label> <input type="text" class="form-control" placeholder="" name="package_title[]" id=""> </div></div><div class="row"> <div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Minimum antalb gæster*</label> <input type="number" class="form-control" name="package_min_guests[]" placeholder="Tal"> </div><div class="col-lg-12"> <label class="form-check-label" for="exampleCheck4">Maksimum antal deltagere*</label> <input type="number" class="form-control" name="package_max_guests[]" placeholder="Tal"> </div><div class="col-lg-6"> <label class="form-check-label" for="exampleCheck4">Pris*</label> <input type="text" class="form-control" placeholder="DKK" name="package_price[]" id=""> <select class="form-control" id=""> <option value="1">inkl.moms</option> <option value="0">eksl.moms</option> </select> </div><div class="col-lg-12"> <div class="mb-3 form-check"> <input type="checkbox" name="offers_location[]" class="form-check-input"> <label class="form-check-label" for="">Eventbureauet tilbyder lokation for dette event</label> </div></div><div class="col-lg-12"> <div class="mb-3 form-check"> <input type="checkbox" name="at_customer_end[]" class="form-check-input"> <label class="form-check-label" for="">Dette event kan afholdes ude hos kunden</label> </div></div></div></div><div class="col-lg-8"> <div class="row"> <div class="col-lg-12"> <strong>Beskrivelse</strong> <textarea name="package_description[]" cols="25" rows="5"></textarea> </div></div></div></div><div class="row mt-3"> <div class="col-lg-12"> <div class="buttons"> <div style="float: right"> <button type="button" class="btn btn-sm btn-info addmore_button_packages_cat4">Add More Pakker</button> </div></div></div></div></div>';
    $(html).clone().appendTo('.lbx-wrapper');
    $(document).on('click', '.removeroomDiv', function () {
      $(this).parent().remove();
    });
  });
  $(document).on('click', '.addFacilities', function () {
    var facilityID = $(this).attr('rel');
    var html = '<div class="field-clone mt-3"><input type="text" name="fcsubheader_' + facilityID + '[]"><a class="delete-fac">-</a></div>';
    var limit = 5;
    var check = $(this).parent().parent().find('.InputsWrapper').find('.dbfield').length;
    var cloneLength = $(this).parent().parent().find('.clone-wrapper').find('.field-clone').length;
    var totalCheck = parseInt(check + cloneLength);

    if (totalCheck < limit) {
      $(html).clone().appendTo($(this).parent().parent().find('.clone-wrapper'));
    } else {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Maximum limit reached you can add maximum 5!'
      });
    }

    $(document).on('click', '.delete-fac', function () {
      $(this).parent().remove();
    });
  });
  $(document).on('change', '.category_facilities', function () {
    if (this.checked) {
      $(this).parent().find('.facilities-headers').show();
    } else {
      $(this).parent().find('.facilities-headers').hide();
    }
  });

  function disableButtonRemove(parentDiv, nowButton) {
    if (parentDiv.children().length <= 1) {
      nowButton.attr('disabled', 'disabled');
      nowButton.removeClass('shadow-sm');
    }
  }

  function disableButtonAdd(parentDiv, nowButton) {
    if (parentDiv.children().length >= maxFields) {
      nowButton.attr('disabled', 'disabled');
      nowButton.removeClass('shadow-sm');
    }
  }

  function enableButtonAdd(parentDiv, nowButton) {
    if (parentDiv.children().length <= maxFields) {
      nowButton.removeAttr('disabled');
      nowButton.addClass('shadow-sm');
    }
  }

  $(document).on('click', '.add-button-field', function () {
    var nowButton = $(this);
    var parentDiv = $(this).parent().parent().find('.field-wrapper');
    addNewField(parentDiv);
    enableButtonRemove(parentDiv, nowButton);
    disableButtonAdd(parentDiv, nowButton);
  });
  $(document).on('click', '.remove-button-field', function () {
    var nowButton = $(this);
    var parentDiv = $(this).parent().parent().find('.field-wrapper');
    removeLastField(parentDiv);
    disableButtonRemove(parentDiv, nowButton);
    enableButtonAdd(parentDiv, nowButton);
  });
  var status = $('#leadStatus').find(':selected').val();

  if (status == 'waiting') {
    $('.lead-circle').css('color', 'red');
  }

  if (status == 'pending') {
    $('.lead-circle').css('color', 'var(--bs-warning)');
  }

  if (status == 'success') {
    $('.lead-circle').css('color', 'var(--bs-success)');
  }

  if (status == 'deleted') {
    $('.lead-circle').css('color', 'black');
  } // if (status == 'waiting') {
  //     $('.lead-circle').css('color', 'var(--bs-orange)')
  // }


  $('#leadStatus').change(function () {
    if ($(this).val() == 'waiting') {
      $('.lead-circle').css('color', 'red');
    }

    if ($(this).val() == 'pending') {
      $('.lead-circle').css('color', 'var(--bs-warning)');
    }

    if ($(this).val() == 'success') {
      $('.lead-circle').css('color', 'var(--bs-success)');
    }

    if ($(this).val() == 'deleted') {
      $('.lead-circle').css('color', 'black');
    }
  });

  if ($('.night_facility_yes_bx').is(':checked')) {
    $('.night_facility_yes').css('display', 'block');
    $('.night_facility_no').css('display', 'none');
  } else if ($('.night_facility_no_bx').is(':checked')) {
    $('.night_facility_yes').css('display', 'none');
    $('.night_facility_no').css('display', 'block');
  }

  $('.category_facilities').each(function () {
    if (this.checked) {
      $(this).parent().find('.facilities-headers').show();
    } else {
      $(this).parent().find('.facilities-headers').hide();
    }
  });
}); /// Dlete Fucntion for Facilites subheaders of Category 1 and 2

$(document).off('click', '.dbfcdlt').on('click', '.dbfcdlt', function (e) {
  var id = $(this).attr('rel');
  e.preventDefault();
  swal({
    title: 'Are you sure?',
    text: 'You will not be able to recover it again!',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $.ajax({
        type: 'POST',
        url: '/admin/bidder-facility/delete',
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          id: id
        },
        async: false,
        success: function success() {
          swal('Your record has been deleted!', {
            icon: 'success'
          });
          setTimeout(function () {
            location.reload();
          }, 300);
        }
      });
    } else {
      swal('Your record is safe!');
    }
  });
}); /// Dlete Price Packages for Catrgories

$(document).off('click', '.deletepkgBtn').on('click', '.deletepkgBtn', function (e) {
  var id = $(this).attr('rel');
  e.preventDefault();
  swal({
    title: 'Are you sure?',
    text: 'You will not be able to recover it again!',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $.ajax({
        type: 'POST',
        url: '/admin/price-pkg/delete',
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          id: id
        },
        async: false,
        success: function success() {
          swal('Your record has been deleted!', {
            icon: 'success'
          });
          setTimeout(function () {
            location.reload();
          }, 300);
        }
      });
    } else {
      swal('Your record is safe!');
    }
  });
}); /// Dlete Function for Rooms/ Localer

$(document).off('click', '.deleteRoomBtn').on('click', '.deleteRoomBtn', function (e) {
  var id = $(this).attr('rel');
  e.preventDefault();
  swal({
    title: 'Are you sure?',
    text: 'You will not be able to recover it again!',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $.ajax({
        type: 'POST',
        url: '/admin/bidder-room/delete',
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          id: id
        },
        async: false,
        success: function success() {
          swal('Your record has been deleted!', {
            icon: 'success'
          });
          setTimeout(function () {
            location.reload();
          }, 300);
        }
      });
    } else {
      swal('Your record is safe!');
    }
  });
});

function editor() {
  tinymce.init({
    selector: 'textarea',
    height: 200,
    theme: 'modern',
    plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools  contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | code',
    image_advtab: true,
    templates: [{
      title: 'Test template 1',
      content: 'Test 1'
    }, {
      title: 'Test template 2',
      content: 'Test 2'
    }],
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        // '//www.tinymce.com/css/codepen.min.css'
    ]
  });
}
