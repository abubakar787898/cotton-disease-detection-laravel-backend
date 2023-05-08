<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'medicine-list',
            'medicine-create',
            'medicine-edit',
            'medicine-delete',
            'recommended-medicine-list',
            'recommended-medicine-create',
            'recommended-medicine-edit',
            'recommended-medicine-delete',
            'user-list',
            'user-create',
            'user-edit',
            'user-delete'
         ];
      
         foreach ($permissions as $permission) {
              Permission::create(['name' => $permission]);
         }
    }
}
