<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Admin;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

// php artisan db:seed --class=PermissionTableSeeder

// php artisan db:seed --class=CreateAdminUserSeeder
class CreateAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    // php artisan db:seed --class=CreateAdminUserSeeder
    public function run()
    {
         User::create([
            'name' => 'Abubakar Islam', 
            'email' => 'user@gmail.com',
            'password' => bcrypt('123456')
        ]);
    
        Admin::create([
            'name' => 'Abubakar Islam', 
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456')
        ]);
    

    }
}
