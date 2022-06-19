<?php

    namespace App\Http\Controllers;

    use Illuminate\Routing\Controller;
    use App\Models\User;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Session;
    use Illuminate\Support\Facades\DB;

    use Illuminate\Routing\Redirector;
    use Illuminate\Foundation\Auth\AuthenticatesUsers;
    use Illuminate\Http\Request;

    use App\Http\Controllers\HomeController;


    class LoginController extends Controller{

        public function checkUtente($user, $pass) {

            $controlloUsername = DB::table('utente')
                                ->select('Username')
                                ->where('Username', $user)->first();

            if($controlloUsername){

                $controlloPassword = DB::table('utente')
                                ->select('Password')
                                ->where('Username', $user)->first();

                if(Hash::check($pass, $controlloPassword->Password)){

                    return $responose = array("Coincidono" => "si");

                }else{

                    return $responose = array("Coincidono" => "no");

                }

            }else{

                return $responose = array("Coincidono" => "non_esiste"); 

            }

        }

        public function checkLogin(){

            $request = request();

            $user = $request["Username"];
            $pass = $request["Password"];

            $controlloUsername = DB::table('utente')
                                    ->select('Username')
                                    ->where('Username', $user)->first();

            if($controlloUsername){

                $controlloPassword = DB::table('utente')
                                        ->select('Password')
                                        ->where('Username', $user)->first();

                if(Hash::check($pass, $controlloPassword->Password)){

                    Session::put('Username', $user);
                    $username = Session("username");
                    return view('/home')->with('csrf_token', csrf_token());
    
                }else{
    
                    return view("/login");
    
                }

            }else{
    
                return view("/login");

            }

        }


         public function index(){

            return view("/login");
    
        }    

    }

?>