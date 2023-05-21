@include('admin.layoutsAdmin.header')

@auth
    @include('admin.layoutsAdmin.topbar')
@endauth

@auth
    @include('admin.layoutsAdmin.sidebar')
@endauth

<div id="layoutSidenav_content">
    <main>


        <div class="container-fluid px-4">

          
            @include('admin.layoutsAdmin.messages')

            @yield('content')

        </div>

    </main>

    @include('admin.layoutsAdmin.footer')

    @yield('custom-js')
    </body>

    </html>
