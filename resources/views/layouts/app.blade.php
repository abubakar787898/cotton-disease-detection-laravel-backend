@include('layouts.header')

@auth
    {{-- @include('layouts.topbar') --}}
@endauth

@auth
    {{-- @include('layouts.sidebar') --}}
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

        {{-- <div class="container-fluid px-4">

            {{-- @include('layouts.messages') --}}

        {{-- <div id="loader" class="center"></div> --}}
        {{-- @yield('content')

        </div> --}}

    </main>

    @include('layouts.footer')

    {{-- custom js yileed --}}
    {{-- @yield('custom-js') --}}

</div>
