<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Recipe extends Model
{

    protected $primaryKey = 'id';
    protected $table= "recipes";
    protected $guarded = ["id","created_at","updated_at","deleted_at"]; // not mass-assignable

    public function category(){
        return $this->belongsTo('App\Category'); //relatie met category
    }
}
