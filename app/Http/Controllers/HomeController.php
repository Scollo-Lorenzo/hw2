<?php

    namespace App\Http\Controllers;

    use Illuminate\Routing\Controller;
    use App\Models\User;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Session;
    use Illuminate\Support\Facades\DB;
    
class HomeController extends Controller {

    public function insert($id, $nome, $brand, $URLFoto, $prezzo, $funzione){

        $URL_Conv = str_replace("-----", "/", $URLFoto);

        if($funzione == "preferiti"){

            $response = array("dove va?" => "nei preferiti");

            $verificaScarpa = DB::table('scarpe')
                                ->select('ID')
                                ->where('ID', $id)->first();

            if($verificaScarpa){

                //Se è già inserita non facciamo nulla

            }else{

                $var = DB::table('scarpe')->insert([
                    ['ID' => $id, 'Nome' => $nome, 'Brand' => $brand, 'URLFoto' => $URL_Conv, 'Prezzo' => $prezzo],
                ]);

            }
            
            $ID_Utente = DB::table('utente')
                        ->select('ID')
                        ->where('Username', Session("Username"))->first();

            $var2 = DB::table('listapreferiti')->insert([
                        ['ID_Utente' => $ID_Utente->ID, 'ID_Scarpa' => $id, 'Prezzo' => $prezzo],
                    ]);
            
        
        }else{

            $response = array("dove va?" => "nel carrello");

            $verificaScarpa = DB::table('scarpe')
                                ->select('ID')
                                ->where('ID', $id)->first();

            if($verificaScarpa){

                //Se è già inserita non facciamo nulla

            }else{

                $var = DB::table('scarpe')->insert([
                    ['ID' => $id, 'Nome' => $nome, 'Brand' => $brand, 'URLFoto' => $URL_Conv, 'Prezzo' => $prezzo],
                ]);

            }
            
            $ID_Utente = DB::table('utente')
                        ->select('ID')
                        ->where('Username', Session("Username"))->first();

            $var2 = DB::table('carrello')->insert([
                        ['ID_Utente' => $ID_Utente->ID, 'ID_Scarpa' => $id, 'Prezzo' => $prezzo],
                    ]);

        }

        $response = array(  "ID Scarpa" => $id, 
                            "Nome" => $nome, 
                            "Brand" => $brand, 
                            "URLFoto" => $URL_Conv,
                            "Prezzo" => $prezzo,
                            "Funzione" => $funzione);

        return $response;

    }

    public function delete($id, $funzione){

        if($funzione == "preferiti"){

            $delFromFav = DB::table('listapreferiti')->where('ID_Scarpa', '=', $id)->delete();

            $verificaScarpa = DB::table('scarpe')
                                ->select('ID')
                                ->where('ID', $id)->first();

            $verificaScarpaInShop = DB::table('carrello')
                                ->select('ID_Scarpa')
                                ->where('ID_Scarpa', $id)->first();

            if($verificaScarpaInShop){

                //Se è già inserita, la eliminiamo

            }else{

                //Se la scarpa non è presente vuol dire che è già stata eliminata
                $delFromShoes = DB::table('scarpe')->where('ID', '=', $id)->delete();

            }

            

        }else{

            $delFromShop = DB::table('carrello')->where('ID_Scarpa', '=', $id)->delete();
            
            $verificaScarpa = DB::table('scarpe')
                                ->select('ID')
                                ->where('ID', $id)->first();

            $verificaScarpaInFav = DB::table('listapreferiti')
                                        ->select('ID_Scarpa')
                                        ->where('ID_Scarpa', $id)->first();

            if($verificaScarpaInFav){

                //Se la scarpa è presente nel Carrello NON PUO' ESSERE TOLTA dalla Tabella "SCARPE"

            }else{

                $delFromShoes = DB::table('scarpe')->where('ID', '=', $id)->delete();

            }

        }

    }

    public function logout(){

        Session::put('Username', null);
        Session()->flush();

    }

    public function prelevaGIF($info){

        if($tipo == "info"){

            $KEY = "1s2le53GpUp2F2xGGfNJANSWuKtvm5I5";
            $endPointAPIGIF = "https://api.giphy.com/v1/gifs/search?api_key=";
        
            $URL = $endPointAPIGIF.$KEY."&q=how+about+you&limit=10&offset=0&rating=g&lang=it";
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $URL);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            $result = curl_exec($curl);
        
            echo $result;    
        
            //return json_encode($result);
        
        }else{
        
            $KEY = "1s2le53GpUp2F2xGGfNJANSWuKtvm5I5";
            $endPointAPIGIF = "https://api.giphy.com/v1/gifs/search?api_key=";
        
            $URL = $endPointAPIGIF.$KEY."&q=welcome&limit=10&offset=0&rating=g&lang=it";
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $URL);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            $result = curl_exec($curl);
        
            //return json_encode($result);

            echo $result;
        
        
        }
        
        curl_close($curl);

        //return 200;

    }

    public function index(){

        return view("home");

    }

    
}
?>