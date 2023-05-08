function searchBiddersStats () {

    var form = $('#statsForm').serialize()
    var table = $('#statsTable').DataTable()
    table.destroy()

    $('#statsTable').DataTable({

        processing: true,
        // serverSide: true,

        ajax: {
            url: '/admin/stats/search_bidders',
            type: 'GET',
            data: {
                form: form
            },
            dataType: 'JSON'
            // dataFilter: function(data){
            //     var json = jQuery.parseJSON( data );
            //     console.log(json)
            // }
        },
        columns: [
            { data: 'title', name: 'title' },
            { data: 'packageTitle', name: 'packageTitle' },
            { data: 'views', name: 'views' },
            { data: 'directLeads', name: 'directLeads' },
            { data: '3-tilbudLeads', name: '3-tilbudLeads' },
            { data: 'acceptedLeads', name: 'acceptedLeads' }
        ],
        order: [[0, 'desc']],
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            // Total over all pages
            total5 = api
                .column( 5 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            // Total over all pages
            total4 = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            // Total over all pages
            total3 = api
                .column( 3 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            total2 = api
                .column( 2 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // // Total over this page
            // pageTotal = api
            //     .column( 4, { page: 'current'} )
            //     .data()
            //     .reduce( function (a, b) {
            //         return intVal(a) + intVal(b);
            //     }, 0 );

            // Update footer
            $( api.column( 5 ).footer() ).html(
                // '$'+pageTotal +' ( $'+ total +' total)'
                total5
            );
            $( api.column( 4 ).footer() ).html(
                // '$'+pageTotal +' ( $'+ total +' total)'
                total4
            );
            $( api.column( 3 ).footer() ).html(
                // '$'+pageTotal +' ( $'+ total +' total)'
                total3
            );
            $( api.column( 2 ).footer() ).html(
                // '$'+pageTotal +' ( $'+ total +' total)'
                total2
            );

            // fillChart(total2, total3, total4, total5);
            fillChart(total3, total4, total5);
            fillViewChart(total2)
            

        }

    })
}

function chartLoad () {
    var barChartData = {
        labels: year,
        datasets: [
            {
                label: 'User',
                backgroundColor: 'pink',
                data: user
            }
        ]
    }

    var ctx = document.getElementById('canvas').getContext('2d')
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: '#c1c1c1',
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            title: {
                display: true,
                text: 'Yearly User Joined'
            }
        }
    })
}


function fillChart(leads, offersLeads3, acceptedLeads) {

    var ctx = document.getElementById('canvas').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Budgiver leads', '3 tilbud leads', 'Accepteret leads'],
            datasets: [{
                label: '# Numbers',
                data: [leads, offersLeads3, acceptedLeads],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // var myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Numbers'],
    //         datasets: [
    //             {
    //                 label: 'Dataset 1',
    //                 data: 30,
    //                 borderColor: 'rgba(111, 78, 78, 0.2)',
    //                 backgroundColor: 'rgba(111, 78, 78, 0.2)',
    //               },
    //               {
    //                 label: 'Dataset 2',
    //                 data: 20,
    //                 borderColor: 'rgba(11, 78, 8, 0.2)',
    //                 backgroundColor: 'rgba(11, 78, 8, 0.2)',
    //               }

    //         ]
    //     },
    //     options: {
    //         plugins: {
    //           title: {
    //             display: true,
    //             text: 'Chart.js Bar Chart - Stacked'
    //           },
    //         },
    //         responsive: true,
    //         scales: {
    //           x: {
    //             stacked: true,
    //           },
    //           y: {
    //             stacked: true
    //           }
    //         }
    //       }
    // });
}


function fillViewChart(bidderProfileViews) {
    var ctx = document.getElementById('chart-profile-view').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Views'],
            datasets: [
                {
                    label: 'Profil Views',
                    data: [bidderProfileViews],
                    backgroundColor: [
                        'rgba(165, 106, 29, 0.2)',
                    ],
                    borderColor: [
                        'rgba(165, 106, 29, 1)',
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Rapportering fra EventButler'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                }
            }
        }
    });
}