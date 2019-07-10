<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use App\Recipe;
class FrontController extends Controller
{
    public function index(){
        return Recipe::with('category')->where('show','=',1)->get();
    }
}
