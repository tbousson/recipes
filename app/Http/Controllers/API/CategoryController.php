<?php

namespace App\Http\Controllers\API;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Support\Facades\Validator;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::all();
        
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
            'name' => 'required|String|min:2|unique:categories,name'
        ]);

        if ($validator->fails()) {
            

            return response()->json($validator->errors(), 422);
        }
        $category = Category::create($request->all());
        return response($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|String|min:2|unique:categories,name'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $category= Category::findOrFail($id);
        $category->update($request->all());
        return response($category);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $cat = $category->name;
        $category->delete();
        return response()->json("Category $cat has been Deleted");
    }
}
