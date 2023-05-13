<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
  
    <a class="navbar-brand ps-3" >
        Cotton Admin Panel
    </a>
    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 d-flex justify-content-end container">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
         
                <li><a class="dropdown-item" href="#!"><i class='fas fa-cog'></i>&nbsp;Activity Log</a></li>
                <li><hr class="dropdown-divider" /></li>
                
                <li>
                    <a class="dropdown-item"  href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <i class="fas fa-sign-out-alt"></i>&nbsp;{{ __('Logout') }}
                    </a>
                    
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </li>
            </ul>
        </li>
    </ul>
</nav>
