<div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <!-- <div class="sb-sidenav-menu-heading">Core</div> -->
                    {{-- @can('medicine-delete') --}}
                    <a class="nav-link" href="{{ route('medicines.index') }}">
                        <div class="sb-nav-link-icon">
                            <i class="fa fa-file"></i>
                            </div>
                            Medicine
                    </a>
                    {{-- @endcan --}}
                    {{-- @can('medicine-delete') --}}
                    <a class="nav-link" href="{{ route('recommended.index') }}">
                        <div class="sb-nav-link-icon">
                            <i class="fab fa-500px"></i>
                            </div>
                            Recommended Medicine
                    </a>
                   
                    <a class="nav-link" href="{{ route('users.index') }}">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-user"></i>
                            </div>
                         Users
                    </a>
                    <a class="nav-link" href="{{ route('admins.index') }}">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-user"></i>
                            </div>
                         Admin
                    </a>
                
                    
                </div>
            </div>
            <div class="sb-sidenav-footer">
  
                <div class="small">Logged in as: {{ auth()->user()->name ?? auth()->user()->email }}</div>
            </div>
        </nav>
    </div>
    {{-- <li><a class="nav-link" href="{{ route('users.index') }}">Manage Users</a></li>
    <li><a class="nav-link" href="{{ route('roles.index') }}">Manage Role</a></li>
    <li><a class="nav-link" href="{{ route('medicines.index') }}">Manage Product</a></li> --}}