# Recipes

- Maak nieuw laravel project aan.

  ```
  laravel new recipes
  ```

- Creëer migrations met models en API controllers.

  ```
  php artisan make:model Recipe -m
  php artisan make:controller API/RecipeController --api --model=Recipe
  php artisan make:model Category -m
  php artisan make:controller API/CategoryController --api --model=Category
  ```

- Models aanpassen (relatie, fillables/guarded, softdeletes).

- Seeders aanmaken.

  ```
  php artisan make:seeder UsersTableSeeder
  php artisan make:seeder CategoriesTableSeeder
  php artisan make:seeder RecipesTableSeeder
  ```

  

- api routes toevoegen aan routes/api.php.

- CRUD aanmaken in controller (CategoryController, RecipeController).

- Testen van CRUD via Insomnia REST client.

- Install Vuex, Axios

  ```
  npm install vuex axios vue-router
  ```

- Set up vue Router en Store

- 

  ```
  
  ```

  

