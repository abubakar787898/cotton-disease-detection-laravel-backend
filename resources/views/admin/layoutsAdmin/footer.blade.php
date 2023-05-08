
<footer class="py-4 bg-light mt-5">
    <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2021</div>
            <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
            </div>
        </div>
    </div>
</footer>

</div>
</div>

{{-- <script src="{{ url('/') }}/js/jquery-3.5.1.js" crossorigin="anonymous"></script> --}}
{{-- <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script> --}}
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script src="{{ url('/') }}/admin/js/jquery-ui.min.js" ></script>
<script src="{{ url('/') }}/admin/js/common.js"></script>
<script src="{{ url('/') }}/admin/js/jquery-ui.multidatespicker.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>


{{-- multifiles jquery plugin --}}
<script src="{{ url('/') }}/js/multiFile.js"></script>
<script src="{{ url('/') }}/admin/js/dawa-autocomplete2.min.js"></script>
<script src="{{ url('/') }}/admin/js/select2.min.js"></script>
<script src="{{ url('/') }}/admin/js/dawaScript.js"></script>
<script src="{{ url('/') }}/admin/js/multDatesscript.js"></script>
<script src="{{ url('/') }}/admin/js/scripts.js"></script>
<script src="{{ url('/') }}/loader/loader.js"></script>
<script src="{{ url('/') }}/admin/js/toast.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.11/tinymce.min.js" integrity="sha512-3tlegnpoIDTv9JHc9yJO8wnkrIkq7WO7QJLi5YfaeTmZHvfrb1twMwqT4C0K8BLBbaiR6MOo77pLXO1/PztcLg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 
{{-- <script src="{{ url('/') }}/admin/js/tinymce.min.js" integrity="sha512-3tlegnpoIDTv9JHc9yJO8wnkrIkq7WO7QJLi5YfaeTmZHvfrb1twMwqT4C0K8BLBbaiR6MOo77pLXO1/PztcLg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}

<script src="{{ url('/') }}/admin/js/dropzone.js"></script>
<script src="{{ url('/') }}/admin/js/jquery.dataTables.min.js"></script>
<script src="{{ url('/') }}/admin/js/dataTables.bootstrap5.min.js"></script>
<script src="{{ url('/') }}/admin/js/bootstrap.bundle.min.js">
</script>
<script src="{{ url('/') }}/admin/js/notify.min.js"></script>
<script src="{{ url('/') }}/admin/js/all.min.js" crossorigin="anonymous"></script>
<script src="{{ url('/') }}/admin/js/sweetalert.min.js"
        integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript">

    var delayInMilliseconds = 1000; //1 second

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Toolt tip implementation

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/js/bootstrap-select.min.js" referrerpolicy="no-referrer"></script>
{{-- <script src="{{ mix('/user/js/airports/test-airport.js') }}"></script> --}}

