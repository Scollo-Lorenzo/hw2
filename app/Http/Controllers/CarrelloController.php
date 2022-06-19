<?php

    namespace App\Http\Controllers;

    use Illuminate\Routing\Controller;
    use App\Models\User;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Session;
    use Illuminate\Support\Facades\DB;
    
class CarrelloController extends Controller {

    public function prelevaDaCarrello($user){

        //$user = "Lorenzo12_";
        $userNew = str_replace(" ", "", $user); //$user arriva con uno spazio all'inizio e alla fine, quindi li togliamo.

        $ID_Utente = DB::table('utente')
                    ->select('ID')
                    ->where('Username', $userNew)->first();

        $ID_Scarpa = DB::table('carrello')
                    ->select('ID_Scarpa')
                    ->where('ID_Utente', $ID_Utente->ID)->get();

        //return $response = array("ID_Scarpa" => $ID_Scarpa);

        if((count($ID_Scarpa)) !== 0){

            //return $response = array("elementi" => "si");
            //return $response = array("elementi" => $ID_Scarpa, "elementi.length" => (count($ID_Scarpa)), "prova" => $ID_Scarpa[0]->ID_Scarpa);
            
            for($i = 0; $i < (count($ID_Scarpa)); $i++){

                $Scarpa = DB::table('scarpe')
                                ->select('*')
                                ->where('ID', $ID_Scarpa[$i]->ID_Scarpa)->get();

                $Scarpe[$i] = $Scarpa;

            }

            return $response = array("vettScarpe" => $Scarpe);
            
            

        }else{

            return $response = array("vettScarpe" => "No_Element");

        }


        //return $response = array("prova" => $user, "ID" => $ID_Utente, "userNew" => $userNew);


    }

    public function index(){

        return view("carrello");

    }

    
}
?>