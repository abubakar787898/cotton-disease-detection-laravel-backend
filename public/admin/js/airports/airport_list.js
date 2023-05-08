// $(function () {
//     $('.hotel-datatable').DataTable({
//         "processing": true,
//         "serverSide": true,
//         "ajax": "hotels",


//         "columns": [


//             {
//                 "data": "id",
//                 render: function (data, type, row) {
//                     return row.DT_RowIndex;                   
//                 }
//             },

//             {
//                 "data": "name"
//             },
//             {
//                 "data": "stars",
//             },
        
//             {
//                 "data": "action",
//                 orderable: false,
//                 searchable: false,
//                 render: function(data,type,row){
//                     return `<div class="d-flex d-flex flex-row justify-content-end">
//                     <a class="m-1 btn btn-sm btn-primary " data-bs-toggle="tooltip" title="View" href="hotels/` + row.id + `">
//                         <i class="bi bi-eye-fill"></i>
//                     </a>
//                     <form action="hotels/` + row.id + `/edit" method="POST">
//                         <a class="m-1 btn btn-sm btn-success" data-bs-toggle="tooltip" title="Edit" href="hotels/` + row.id + `/edit">
//                             <i class="bi bi-pencil-square"></i>
//                         </a>
//                     </form>
//                     <form class="delete-form-list"  action="hotels/` + row.id + `" method="POST">
//                     <input type="hidden" name="_token" value="`+$('meta[name="csrf-token"]').attr('content')+`">
//                     <input type="hidden" name="_method" value="DELETE">
//                         <button type="button" class="m-1 btn btn-danger btn-sm delete-from-list delete" title="Delete" data-bs-toggle="tooltip">
//                             <i class="fa fa-fw fa-trash"></i></button>
//                     </form>
//                 </div>`;
                    
//                 }

//             },
        

//         ],
  

//     });
// });
