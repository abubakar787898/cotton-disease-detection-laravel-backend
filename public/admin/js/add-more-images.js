
function hideAlreadyAdded(id) {

    $('#modal-more-images-' + id + ' label.tile-image-picker').show()

    var tSelectedIds=[]

    $('#cat-form-' + id + ' .image-selector').each(function( index ) {
        var tSelectedId = $(this).find('.image-hdnField').val()
        if(tSelectedId != '') tSelectedIds.push(tSelectedId)
    });

    console.log('tSelectedIds', tSelectedIds);

    $('#modal-more-images-' + id + ' input.more-image-picker-check').each(function( index ){
        if(tSelectedIds.includes($(this).attr('rel'))) {                    
            console.log('hide it: ', $(this).attr('rel'))
            $(this).parent().hide()
        }
    });

}

function toggleImageSelection(cateBidderId, imageId) {

    console.log($('#more-image-modal-' + cateBidderId + ' .tile-checked-' + imageId).length);

    // alert('test');
    console.log('test toggleImageSelection')

    console.log($('#more-image-modal-' + cateBidderId + ' .picker-check-' + imageId).is(":checked"))

    if($('#more-image-modal-' + cateBidderId + ' .tile-checked-' + imageId).hasClass('d-none')) {

        $('#more-image-modal-' + cateBidderId + ' .tile-checked-' + imageId).removeClass('d-none')
        // $('#more-image-modal-' + cateBidderId + ' .picker-check-' + imageId).prop( "checked", true)

    } else {

        console.log('must be unchecked now')
        // $('#more-image-modal-' + cateBidderId + ' .picker-check-' + imageId).prop( "checked", false)
        // $('#more-image-modal-' + cateBidderId + ' .picker-check-' + imageId).addClass('Zia')

    }

}

/**
 * Add more category images function v
 */
function addCatMoreImages(catBidderId) {

    console.log('catBidderId: ', catBidderId);
    selectedImageIds=[];

    $('#more-image-modal-' + catBidderId + ' .more-image-picker-check').each(function() {
        if($(this).is(':checked')) selectedImageIds.push($(this).attr('rel'))
    });

    console.log(' selectedImageIds', selectedImageIds);

    // here sending images to save it

    $.ajax({
        type: "POST",
        url: "/admin/ajax/update-bidder-category-images",
        headers: {
            "X-CSRF-Token": $('meta[name="csrf-token"]').attr(
                "content"
            )
        },
        data: {
            ids: selectedImageIds,
            catBidderId: catBidderId,
        },
        async: false,
        success: function() {
            swal("Your record has been deleted!", {
                icon: "success"
            });
            // setTimeout(function() {
            //     location.reload();
            // }, 300);
        }
    });

}
