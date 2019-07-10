<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(['name' =>'Ontbijt']);
        DB::table('categories')->insert(['name' =>'Lunch']);
        DB::table('categories')->insert(['name' =>'Hoofdschotels']);
    }
}
