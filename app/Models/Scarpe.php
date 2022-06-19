<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Scarpe extends Model{

        protected $table = 'scarpe'; //Rinominiamo la Tabella, poichè altrimeni si chiamerebbe "carrellos"
        
        //Definiamo la relazione N-N con Carrello e Lista Preferiti.
        public function Carrello(){

            return $this->belongsToMany('App/Models/User');

        }

        public function ListaPreferiti(){

            return $this->belongsToMany('App/Models/User');

        }

    }

?>