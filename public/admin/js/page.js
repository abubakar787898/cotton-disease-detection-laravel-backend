
$(function () {

    updateEditor()

});


function updateEditor() {

    tinymce.init({
        selector: ".fancy-page-editor",
        height: 200,
        menubar: false,
        theme: "modern",
        // plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
        // toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | code',
        plugins: "print contextmenu preview autolink fullscreen template link codesample lists",
        toolbar: "undo redo | formatselect | bold | link | bullist",
        // toolbar: "undo redo | formatselect | bullist",
        image_advtab: true,
        content_css: [
            "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i"
        ]
    });

}


$('.page-blocks').on('change', function(event, value) {

    if($(".page-blocks option:selected").val() == 0){
        return false;
    }
        var blockTitle = $(".page-blocks option:selected").text();

        $.ajax({
            type: "POST",
            url: _baseUrl + "admin/ajax/addPageGroup",
            data: {
                page_block_id: $(this).val(),
                page_id: $('.page-id').val(),
                _token: $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            success: function(result) {

                var blockDeatil = '<div id="' + result.data.searchResults.id + '" style="display: inline-block; margin-right: 6px;" class="p-2 mt-1 border border-2 rounded list-page-block"><span class="p-2">' + blockTitle + '</span><i class="bi bi-x-circle-fill" style="cursor: pointer;" onclick="deleteBlock('+ result.data.searchResults.id +')"></i></div>';

                $('.assigned-page-block').append(blockDeatil);
                $(".page-blocks").val("0");
                $.notify(result.message, "success");
            },
            error: function(result) {
                $(".page-blocks").val("0");
                $.notify('Cannot assign duplicate', "error");
                //$.notify(result.statusText, "error");
            },
        });
});

function deleteBlock(id){

    $.ajax({
        type: "POST",
        url: _baseUrl + "admin/ajax/removePageGroup",
        data: {
            id: id,
            _token: $('meta[name="csrf-token"]').attr('content'),
        },
        dataType: 'json',
        success: function(result) {
            $("div.list-page-block#"+id).remove();
            $.notify(result.message, "success");
        },
        error: function(result) {
            $.notify(result.statusText, "error");
        },
    });
}
