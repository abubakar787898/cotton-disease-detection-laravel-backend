$(function() {

    $('.datatable').DataTable({
        "order": [[ 0, "desc" ]]
    });

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
   
    
});
let filterStartDate = new Date();
filterStartDate.setMonth(filterStartDate.getMonth() + 2);

let filterEndDate = new Date(filterStartDate.valueOf());
filterEndDate.setDate(filterStartDate.getDate() + 7);
function convertDate(date) {

    return ("0" + (date.getMonth() + 1)).slice(-2) + '/' 
        + ("0" + date.getDate()).slice(-2) + '/'
        + date.getFullYear();

}

$('input.daterange').daterangepicker({
        // autoUpdateInput: false,
        opens: "left",
        // startDate: filterStartDate.toISOString().slice(0, 10),
        // endDate: filterEndDate.toISOString().slice(0, 10),
        // startDate: convertDate(filterStartDate),
        // endDate: convertDate(filterEndDate),
        // minDate: new Date(),

        locale: {
            "format": "DD/MM/YYYY",
            // format: "YYYY-MM-DD",
            "separator": " - ",
            "applyLabel": "Godkend",
            "cancelLabel": "Afbestille",
            "fromLabel": "Fra",
            "toLabel": "Til",
            "customRangeLabel": "Custom",
            "showWeekNumbers": true,
            "daysOfWeek": [
                "Sø",
                "Mo",
                "Ti",
                "Ve",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "Januar",
                "Februar ",
                "Marts",
                "April",
                "Maj",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "December"
            ],
            // "firstDay": 1
        },
    },

    function(start, end, label) {
        $("#from_date").val(start.format("YYYY-MM-DD"));
        $("#to_date").val(end.format("YYYY-MM-DD"));
        // console.log(
        //     "A new date selection was made: " +
        //     start.format("YYYY-MM-DD") +
        //     " to " +
        //     end.format("YYYY-MM-DD")
        // );
    }
);

$("#from_date").val(filterStartDate.toISOString().slice(0, 10));
$("#to_date").val(filterEndDate.toISOString().slice(0, 10));

if (typeof selectDestination === "function") {
    selectDestination(1, 'Turkey', 'country');
}


 