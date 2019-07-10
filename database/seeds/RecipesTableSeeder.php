<?php

use Illuminate\Database\Seeder;

class RecipesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('recipes')->delete();
        
        \DB::table('recipes')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Vegan Pannenkoeken',
                'category_id' => 1,
                'ingredients' => '180g zelfrijzende bloem*
80g havermeel/havervlokken
80g ahornsiroop
2el olie
300ml amandelmelk + 1tl azijn**',
                'directions' => 'Doe de amandelmelk en azijn in een glas en laat staan terwijl je de rest van de ingrediënten klaarzet.
Verwarm ondertussen je wafelijzer voor. Ik zette de mijne iets verder dan halfweg.
Doe de bloem en de haver bij elkaar en mix goed door. Voeg een klein snuifje zout toe.
Maak een kuiltje in de bloem en giet daarin de ahornsiroop, olie en melk. Meng goed door.
Vergeet je wafelijzer niet in te oliën en doe dan het deeg in het wafelijzer. Bak voor zo\'n 3 minuten of tot goudbruin.
Serveer met je favoriete fruit. Ik maakte de snelste coulis aller tijden: blauwe bessen in een pannetje opwarmen met wat ahornsiroop.',
                'time' => '20 min',
                'show' => 1,
                'created_at' => '2019-07-10 10:46:01',
                'updated_at' => '2019-07-10 10:46:01',
            ),
        ));
        
        
    }
}