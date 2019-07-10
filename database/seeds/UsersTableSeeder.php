<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'thomas bousson',
                'email' => 'thomas.bousson86@gmail.com',
                'password' => bcrypt('test'),
                'remember_token' => NULL,
                'created_at' => '2019-06-04 08:59:12',
                'updated_at' => '2019-06-04 11:38:30',
                
            ),
        ));
        
        
    }
    }

