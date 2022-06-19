<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class User extends Model{

        protected $table = 'utente'; //Rinominiamo la Tabella, poichè altrimeni si chiamerebbe "users"
        
        //Definiamo la relazione N-N con Carrello e Lista Preferiti.
        public function Carrello(){

            return $this->belongsToMany('App/Models/Scarpe');

        }

        public function ListaPreferiti(){

            return $this->belongsToMany('App/Models/Scarpe');

        }

    }

?>