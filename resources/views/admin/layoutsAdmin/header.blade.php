<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Dashboard - Cotton Plant</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <link href="{{ url('/') }}/admin/css/style.css" rel="stylesheet" />
    <link href="{{ url('/') }}/admin/css/styles.css" rel="stylesheet" />
    <link href="{{ url('/') }}/admin/css/dawa.css" rel="stylesheet" />
    <link rel="stylesheet" href="{{ url('/') }}/admin/css/jquery-ui.css">
    <link rel="stylesheet" href="{{ url('/') }}/admin/css/select2.min.css">

    <link href="{{ url('/') }}/admin/css/jquery-ui.multidatespicker.css"
        rel="stylesheet" />
    <link href="{{ url('/') }}/admin/css/toast.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    {{-- adding databales --}}
    <link href="{{ url('/') }}/admin/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="{{ url('/') }}/admin/css/dataTables.bootstrap5.min.css" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" href="{{ url('/') }}/admin/css/sweetalert.min.css">
    {{-- <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?libraries=places&amp;key=AIzaSyBwpadkd8mOmHOdQjq8t4EfhZrDxT1anL0">
    </script> --}}
    {{-- <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?libraries=places&amp;key=AIzaSyDZFGHIsEhHhdWpSXIEoUpxBmg-UM8a1Fg">
    </script> --}}
    
    <link rel="stylesheet" href="{{ url('/') }}/admin/css/dropzone.min.css">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ url('/') }}/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ url('/') }}/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('/') }}/favicons/favicon-16x16.png">
    <link rel="manifest" href="{{ url('/') }}/favicons/site.webmanifest">
    <link rel="mask-icon" href="{{ url('/') }}/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="{{ url('/') }}/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="{{ url('/') }}/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="{{ url('/') }}/admin/css/ekko-lightbox.css">

    <link href="{{ url('/') }}/loader/loader.css" rel="stylesheet" />
    {{-- <link href="{{ url('/') }}/loader/buttonloader.css" rel="stylesheet" /> --}}

    <link href="{{ url('/') }}/admin/css/loader.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    
    {{-- date range picker  --}}
    {{-- https://www.daterangepicker.com/ --}}
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

    @yield('custom-css')

</head>

<body class="sb-nav-fixed">

    <script type="text/javascript">
        const _baseUrl = "{{ url('/') }}/admins/"
        // $.ajaxSetup({
        //     headers: {
        //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //     }
        // });
    </script>
