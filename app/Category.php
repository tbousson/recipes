<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    protected $primaryKey = 'id';
    protected $table= "categories";
    protected $fillable = ["name"]; // mass-assignable


    public function recipes(){
        return $this->hasMany('App\Recipe'); // relatie met recipes
    }
}
