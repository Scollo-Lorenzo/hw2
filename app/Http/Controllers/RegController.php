<?php

    namespace App\Http\Controllers;

    use Illuminate\Routing\Controller;
    use App\Models\User;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Session;
    use Illuminate\Routing\Redirector;

    class RegController extends Controller{

        public function doReg(){

            $request = request();

            $user = $request["Username"];
            $email = $request["Email"];
            $data = $request["DataNascita"];
            $pass = $request["Password"];


            $hashed_pass = Hash::make($pass);

            $newUser = DB::table('utente')->insert([
                            ['Username' => $user, 'Email' => $email, 'DataNascita' => $data, 'Password' => $hashed_pass],
                        ]);

            if($newUser){

                //Salviamo l'username dell'utente
                Session::put('Username', $user);
                $username = Session("username");
                
                //Reindirizziamo l'utente alla HOME
                return view("/home"); //home la definiamo come route.

            }else{

                return view("/reg")->withInput(); //Passiamo anche i dati che sono stati ricevuti nel Controller

            }

        }


        function checkCredenziali($username, $email, $data, $pass){

            $response_username = array("errore" => "no_error");
            $response_email = array("errore" => "no_error");
            $response_data = array("errore" => "no_error");
            $response_pass = array("errore" => "no_error");

            if($username !== "vuoto") //Se il Campo che contiene l'Username non è vuoto lo controlla
            {
            
                $pattern = '/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[_.\-()?#;:!@])[0-9A-Za-z_.\-()?#;:!@]{1,31}$/';
                $user = DB::table('utente')->where('Username', $username)->first();
    
                if($user){
        
                    $response_username = array("errore" => "username_gia_esistente");
                    
                }else{
    
                    //$response_username = array("errore" => "no_error");
                    if(!preg_match($pattern, $username)){ //L'Username deve avere ettera Miaiuscola, Minuscola, Un Numero e Un Carattere Speciale
                
                        $response_username = array("errore" => "username_non_valido");
                
                    }
    
                }
            
            }
            
            if($email !== "vuoto") //Se il Campo che contiene l'Email non è vuoto lo controlla
            {
            
                if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            
                    $response_email = array("errore" => "email_non_valida");
                
                }
            
            }
            
            if($data !== "vuoto"){ //Se il Campo che contiene la Data di Nascita non è vuoto lo controlla
            
                $dataDivisa = explode("-", $data); 
            
                if($dataDivisa[0] <= "1900" || $dataDivisa[0] >= date("Y")){
            
                    $response_data = array("errore" => "data_non_valida1");
            
                }else if($dataDivisa[1] <= "0" || $dataDivisa[1] > "12"){
            
                    $response_data = array("errore" => "data_non_valida2");
            
                }else if($dataDivisa[2] <= "0" || $dataDivisa[2] > "31"){
            
                    $response_data = array("errore" => "data_non_valida3");
            
                }
            
            }
            
            if($pass !== "vuoto"){
            
                $pattern = '/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[_.\-()?#;:!@])[0-9A-Za-z_.\-()?#;:!@]{1,15}$/';
            
                if(strlen($pass) < 8){
            
                    $response_pass = array("errore" => "password_troppo_corta");
            
                }else if(!preg_match($pattern, $pass)){ //La Password deve avere una Lettera Maiuscola, una Minuscola, Un Numero e Un Carattere Speciale
            
                    $response_pass = array("errore" => "password_non_valida");
            
                }
            
            }

            return $response = array($response_username, $response_email, $response_data, $response_pass);

        }

        public function index(){

            return view("registration");

        }

    }

?>