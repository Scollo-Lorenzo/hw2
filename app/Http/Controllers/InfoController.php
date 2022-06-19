<?php

    namespace App\Http\Controllers;

    use Illuminate\Routing\Controller;
    use App\Models\User;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Session;
    use Illuminate\Support\Facades\DB;
    
class InfoController extends Controller {

    public function prelevaInfo($username){

        $userNew = str_replace(" ", "", $username); //$user arriva con uno spazio all'inizio e alla fine, quindi li togliamo.

        $InfoUtente = DB::table('utente')
                        ->select('*')
                        ->where('Username', $userNew)->first();

        return $InfoUtente;

    }

    public function index(){

        return view("info");

    }

    
}
?>