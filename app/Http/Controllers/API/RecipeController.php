<?php

namespace App\Http\Controllers\API;

use App\Recipe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Support\Facades\Validator;
class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Recipe::with('category')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|String|min:2|unique:recipes,name',
            'category_id' => 'required',
            'ingredients' => 'required',
            'directions' => 'required',
            'time' => 'required',
            'show' => 'required| boolean'
        ]);

        if ($validator->fails()) {
            

            return response()->json($validator->errors(), 422);
        }
        $recipe = Recipe::create($request->all());
        return response($recipe);
    }
    
    public function update(Request $request, Recipe $recipe)
    {
        
        
        $validator = Validator::make($request->all(), [
            'name' => "required|String|min:2|unique:recipes,name,$recipe->id",
            'category_id' => 'required',
            'ingredients' => 'required',
            'directions' => 'required',
            'time' => 'required',
            'show' => 'required| boolean'
        ]);

        if ($validator->fails()) {
            

            return response()->json($validator->errors(), 422);
        }
        
        $recipe->update($request->all());
        return response($recipe);
    }

    
    public function destroy(Recipe $recipe)
    {
        $rec = $recipe->name;
        $recipe->delete();
        return response()->json("Recipe $rec has been Deleted");
    }
}
