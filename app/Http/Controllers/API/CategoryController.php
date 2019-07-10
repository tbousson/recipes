<?php

namespace App\Http\Controllers\API;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Support\Facades\Validator;
class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
        
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|String|min:2|unique:categories,name'
        ]);

        if ($validator->fails()) {
            

            return response()->json($validator->errors(), 422);
        }
        $category = Category::create($request->all());
        return response($category);
    }
    public function update(Request $request, $id)
    {
        return response($request);
        $validator = Validator::make($request->all(), [
            'name' => "required|String|min:2|unique:categories,name,$category->id"
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        $category->update($request->all());
        return response($category);
    
    }

   
    public function destroy(Category $category)
    {
        $cat = $category->name;
        $category->delete();
        return response()->json("Category $cat has been Deleted");
    }
}
