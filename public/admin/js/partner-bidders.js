$( function() {

    fetchBidders();

    var availableTags = [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
    ];
    // $( '.bidder' ).autocomplete({
    //   source: availableTags
    // });

  } );

  function fetchBidders() {

    // alert('fetchBidders');

    $.ajax({
        type: 'get',
        url: _baseUrl + "admin/ajax/bidders",
        dataType: "json",
        success: function(result) {

            console.log('result', result)

            // if(result.success) {

                availableTags = result
                // availableTags = result.data.bidders

                $( '.bidder' ).autocomplete({
                    source: availableTags,
                    minLength: 1,
                    // select: function( event, ui ) {

                    //   console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );

                    // },
                    select: function (event, ui) {
                        console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
                        // console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
                        // $("#txtAllowSearch").val(ui.item.label); // display the selected text
                        // $("#txtAllowSearchID").val(ui.item.value); // save selected id to hidden input
                    }
                });

            // }
            // console.log('result', JSON.stringify(result))
            // $("#div1").html(result);

            // populateDatable(JSON.stringify(result))

    }});

}
