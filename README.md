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

- Set up Vue (app.js), voeg HomeController toe, return view (home.blade.php) en start vue Development

  ```
  php artisan make:controller HomeController
  npm run watch
  ```

  

- Install Vuex, Axios

  ```
  npm install vuex axios vue-router
  ```

- Set up VueRouter en Store (App.js, router/index.js, store/index.js)

- Maak nieuwe views aan in (resources/js/views) en de routes + componenten in route/index.js

- Actions, Mutations, Getters voor Recipes en Categories (store.js)

- Recipes en Category in backend (recipes.vue en categories.vue)

  ```
  
  ```

  

