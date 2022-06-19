<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::GET('/', function () {
    return view('registration');
});

Route::GET("/registration", "App\Http\Controllers\RegController@index")->name("reg");
Route::GET('/registration/Username/{user}/Email/{email}/DataNascita/{data}/Password/{pass}', 'App\Http\Controllers\RegController@checkCredenziali');
//Route::GET('/registration/Username/{user}/Email/{email}/DataNascita/{data}/Password/{pass}', 'App\Http\Controllers\RegController@doReg')->name("doReg");
Route::POST('/registration', 'App\Http\Controllers\RegController@doReg')->name('reg');


Route::GET("/login", "App\Http\Controllers\LoginController@index")->name("login");
Route::POST("/login", "App\Http\Controllers\LoginController@checkLogin")->name("login");
Route::GET("/login/username/{user}/password/{pass}", "App\Http\Controllers\LoginController@checkUtente");

Route::GET("/home", "App\Http\Controllers\HomeController@index")->name("home");
Route::GET("/home/ID/{id}/Nome/{nome}/Brand/{brand}/URLFoto/{URLFoto}/Prezzo/{prezzo}/Funzione/{funzione}", "App\Http\Controllers\HomeController@insert");
Route::GET("/home/ID/{id}/Funzione/{funzione}", "App\Http\Controllers\HomeController@delete");
Route::GET("/home/info/{info}", "App\Http\Controllers\HomeController@prelevaGIF");
Route::GET("/home/logout", "App\Http\Controllers\HomeController@logout");


Route::GET("/carrello", "App\Http\Controllers\CarrelloController@index")->name("carrello");
Route::GET("/carrello/Username/{Username}", "App\Http\Controllers\CarrelloController@prelevaDaCarrello");

Route::GET("/listaPreferiti", "App\Http\Controllers\FavController@index")->name("listaPreferiti");
Route::GET("/listaPreferiti/Username/{Username}", "App\Http\Controllers\FavController@prelevaDaFav");

Route::GET("/info", "App\Http\Controllers\InfoController@index")->name("info");
Route::GET("/info/Username/{Username}", "App\Http\Controllers\InfoController@prelevaInfo");
