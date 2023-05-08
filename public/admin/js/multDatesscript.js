$(document).ready(function () {
    //Multiple DatePicker
    var today = new Date();
    var y = today.getFullYear();


    //Catgrory 1 Calendar
    let closingDates1 = $("#dbClosingDates1").val();
    if(closingDates1)
    {
        var c1 = closingDates1.split(",");
    }
    $('#mdp-demo1').multiDatesPicker({
        onSelect: function(dateText) {
            $("#dates1").val( this.value );
        },
        addDates: c1,
        numberOfMonths: [1, 3],
        defaultDate: today,
    })

    // $("#dates1").val($('#mdp-demo1').multiDatesPicker('value') );





    //Catgrory 2 Calendar
    let closingDates2 = $("#dbClosingDates2").val();
    if(closingDates2)
    {
        var c2 = closingDates2.split(",");
    }
    $('#mdp-demo2').multiDatesPicker({
        onSelect: function(dateText) {
            $("#dates2").val( this.value );
        },
        addDates: c2,
        numberOfMonths: [1, 3],
        defaultDate: null,
    })
    $("#dates2").val( $('#mdp-demo2').multiDatesPicker('value') );


     //Catgrory 3 Calendar
    let closingDates3 = $("#dbClosingDates3").val();
    if(closingDates3)
    {
        var c3 = closingDates3.split(",");
    }
    $('#mdp-demo3').multiDatesPicker({
        onSelect: function(dateText) {
            $("#dates3").val( this.value );
        },
        addDates: c3,
        numberOfMonths: [1, 3],
        // defaultDate: today,
    })
    $("#dates3").val( $('#mdp-demo3').multiDatesPicker('value') );

    // Catgrory 4 Calendar
    let closingDates4 = $("#dbClosingDates4").val();
    if(closingDates4)
    {
        var c4 = closingDates4.split(",");
    }
    $('#mdp-demo4').multiDatesPicker({
        onSelect: function(dateText) {
            $("#dates4").val( this.value );
        },
        addDates: c4,
        numberOfMonths: [1, 3],
        // defaultDate: today,
    })
    $("#dates4").val( $('#mdp-demo4').multiDatesPicker('value') );
})
