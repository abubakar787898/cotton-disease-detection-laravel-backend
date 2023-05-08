@include('admin.layoutsAdmin.header')

@auth
    @include('admin.layoutsAdmin.topbar')
@endauth

@auth
    @include('admin.layoutsAdmin.sidebar')
@endauth

<div id="layoutSidenav_content">
    <main>

        
        {{-- <div class="loader">
                <div class="d-flex justify-content-cente">
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> --}}

        <div class="container-fluid px-4">

            {{-- domain: {{ url('/') }} --}}

            @include('admin.layoutsAdmin.messages')

            {{-- <div id="loader" class="center"></div> --}}
            @yield('content')

        </div>

    </main>

    @include('admin.layoutsAdmin.footer')

    {{-- custom js yileed --}}
    @yield('custom-js')
    </body>

    </html>
