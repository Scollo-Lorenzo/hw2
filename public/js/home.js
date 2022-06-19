function stampaTutto(json){

    console.log(json);

}

function onResponse(response){

    console.log("Risposta ricevuta!!");
    return response.json();

}

function getUsername(){

    let Username;

    Username = document.querySelector("#welcome h1");
    console.log("Username -> ", Username.textContent);

    return Username.textContent;

}

function getRandomNumber(){

    let numRandom; 

        random = Math.random() * (10 - 1) + 1;
        numRandom = parseInt(random);

    return numRandom;

}

//------------------------------------------------------Stampa GIF di benvenuto------------------------------------------------------

const info = "welcome"; //Serve per far capire al file php che preleva le GIF, quale tipo di GIF deve prendere
//fetch("../PHP/prelevaGIF.php?q=" + encodeURIComponent(info)).then(onResponse).then(printGIF);
//fetch(ROUTE_HOME + "/info/" + encodeURIComponent(info)).then(onResponse).then(printGIF);

//const host = "v1-sneakers.p.rapidapi.com";

const chiave = "1s2le53GpUp2F2xGGfNJANSWuKtvm5I5";
const endPointAPIGIF = "https://api.giphy.com/v1/gifs/search?api_key=";

fetch(endPointAPIGIF + chiave + "&q=" + info + "&limit=25").then(onResponse).then(printGIF);

function printGIF(json){

    console.log("JSON Ricevuto -->", json);
	data = json.data;

	const sezione = document.querySelector("#gif");
	sezione.innerHTML = ' ';

	console.log("Sezione ->", sezione);
    
    if(data.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

		let numero = getRandomNumber(); //Dato che tramite la richiesta all'API prendo più di una GIF, con un generatore di numeri casuali, scelgo una
                                        //a caso tra queste 10 GIF

		const new_img = document.createElement("img");
		new_img.src = data[numero].images.downsized.url;

		//Appendiamo l'immagine
		sezione.appendChild(new_img);

    }

}

//------------------------------------------------------Stampa GIF di benvenuto------------------------------------------------------



//------------------------------------------------------Generare Vettore NCNR------------------------------------------------------

function getRandomArray(){

    let vettNCNR = []; //Vettore Numeri Casuali NON Ripetuti

    noe = getNumberOfElement();
    noe = noe+5; //In modo tale da poter sfruttare gli altri numeri del vettore in caso vi sia la condizione di immagine nulla.

    for(let i=0; i<noe; i++){

        random = Math.random() * (50 - 1) + 1;
        vettNCNR[i] = parseInt(random);

        for(j=0; j<i; j++){

            if(vettNCNR[i] == vettNCNR[j]){

                i--;
                break;

            }
        }
    }

    return vettNCNR;

}

//------------------------------------------------------Generare Vettore NCNR------------------------------------------------------



//------------------------------------------------------Funzioni per Cambio Icone + Inserimento nel DataBase------------------------------------------------------

function clickedStar(event){

    const ID = event.path[2].children[0].textContent;
    const Brand = event.path[2].children[1].textContent;
    const Nome = event.path[2].children[2].textContent;
    const Colore = event.path[2].children[3].textContent;
    const URL = event.path[2].children[4].src;
    const Prezzo = event.path[2].children[5].textContent;

    let NEW_URL = URL;

    console.log("URL Prima della Conversione -> ", URL);

    let numSlesh = (URL.split("/").length - 1) //3
    console.log("Numero di Slesh -> ", numSlesh);

    for(let i=0; i<numSlesh; i++){

        NEW_URL = NEW_URL.replace("/", "-----");

    }

    NEW_Prezzo = Prezzo.replace("€", "");

    console.log("URL DOPO la Conversione -> ", NEW_URL);
    console.log("PREZZO DOPO la Conversione -> ", NEW_Prezzo);


    const Funzione = "preferiti"; //Passeremo anche questa variabile "Funzione" per far capire al codice PHP dell'insert o del delete dove deve andare ad agire.

    const Username = getUsername();
    console.log("Username dentro Funzione ->", Username);

    if(event.srcElement.attributes[0].value == "../img/unfav.png")
    {

        event.srcElement.attributes[0].value = "../img/fav.png";

		//fetch("../PHP/insert.php?q=" + encodeURIComponent(Username) + "-----" + encodeURIComponent(ID) + "-----" + encodeURIComponent(Nome) + "-----" + encodeURIComponent(Brand) + "-----" + encodeURIComponent(URL) + "-----" + encodeURIComponent(Prezzo) + "-----" + encodeURIComponent(Funzione));
		fetch(ROUTE_HOME 	+ "/ID/" + encodeURIComponent(ID)
                            + "/Nome/" + encodeURIComponent(Nome)
							+ "/Brand/" + encodeURIComponent(Brand)
                            + "/URLFoto/" + encodeURIComponent(NEW_URL)
                            + "/Prezzo/" + encodeURIComponent(NEW_Prezzo)
                            + "/Funzione/" + encodeURIComponent(Funzione)).then(onResponse).then(stampaTutto);
        


    }else if(event.srcElement.attributes[0].value == "../img/fav.png"){

        event.srcElement.attributes[0].value = "../img/unfav.png";

        //fetch(ROUTE_HOME 	+ "/ID/" + encodeURIComponent(ID) + "/Funzione/" +encodeURIComponent(Funzione)).then(onResponse).then(stampaTutto); //Chiama la Delete
        fetch(ROUTE_HOME 	+ "/ID/" + encodeURIComponent(ID) + "/Funzione/" +encodeURIComponent(Funzione));

    }

}

function clickedShopCart(event){

    const ID = event.path[2].children[0].textContent;
    const Brand = event.path[2].children[1].textContent;
    const Nome = event.path[2].children[2].textContent;
    const Colore = event.path[2].children[3].textContent;
    const URL = event.path[2].children[4].src;
    const Prezzo = event.path[2].children[5].textContent;

    let NEW_URL = URL;

    console.log("URL Prima della Conversione -> ", URL);

    let numSlesh = (URL.split("/").length - 1) //3
    console.log("Numero di Slesh -> ", numSlesh);

    for(let i=0; i<numSlesh; i++){

        NEW_URL = NEW_URL.replace("/", "-----");

    }

    NEW_Prezzo = Prezzo.replace("€", "");

    console.log("URL DOPO la Conversione -> ", NEW_URL);
    console.log("PREZZO DOPO la Conversione -> ", NEW_Prezzo);


    const Funzione = "carrello";

    const Username = getUsername();

    if(event.srcElement.attributes[0].value == "../img/noShop.png")
    {
        event.srcElement.attributes[0].value = "../img/yesShop.png";

		fetch(ROUTE_HOME 	+ "/ID/" + encodeURIComponent(ID)
                            + "/Nome/" + encodeURIComponent(Nome)
							+ "/Brand/" + encodeURIComponent(Brand)
                            + "/URLFoto/" + encodeURIComponent(NEW_URL)
                            + "/Prezzo/" + encodeURIComponent(NEW_Prezzo)
                            + "/Funzione/" + encodeURIComponent(Funzione)).then(onResponse).then(stampaTutto);

    }else if(event.srcElement.attributes[0].value == "../img/yesShop.png"){

        event.srcElement.attributes[0].value = "../img/noShop.png";
        
        fetch(ROUTE_HOME 	+ "/ID/" + encodeURIComponent(ID) + "/Funzione/" +encodeURIComponent(Funzione)); //Chiamo la Delete

    }

}

//------------------------------------------------------Funzioni per cambio Icone + Inserimento nel DataBase------------------------------------------------------



//------------------------------------------------------Stampare Scarpe SPECIFICHE------------------------------------------------------

function printSpecificShoes(json){

    let noe = getNumberOfElement();

    console.log("JSON Ricevuto -->", json);
    const results = json.results;

    const vista = document.querySelector('#vista_dinamica');
    vista.classList.remove("loading");
    vista.innerHTML = ' ';
    
    if(results.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        randomArray = getRandomArray();

        for(let i = 0; i<noe; i++){

            let numero = randomArray[i];

            if(results[numero].media.smallImageUrl == null){

                console.log("Dentro Condizione Immagine nulla");
                noe++;
                /*Vi sono alcune scarpe che sono senza immagine, quindi non ha senso farla stampare...
                  per questo ho considerato di mettere nell'array "noe + 5" numeri, in modo tale che se si
                  dovessero incontrare delle scarpe senza immagini, non stampiamo nulla, aumentiamo il noe
                  e riparte il ciclo for */

            }else{

                const sezione = document.createElement("div");
                sezione.classList.add("album_scarpe");
                const nome = document.createElement("p");
                nome.textContent = results[numero].name;

                //Prendo l'ID della scarpa ma non lo rendo visibile
                const ID = document.createElement("p");
                ID.textContent = results[numero].id;
                ID.classList.add("hidden");

                //Prendo il Brand della scarpa ma non lo rendo visibile
                const Brand = document.createElement("p");
                Brand.textContent = results[numero].brand;
                Brand.classList.add("hidden");

                const colore = document.createElement("p");
                colore.textContent = results[numero].colorway;
                const immagine = document.createElement("img");
                immagine.src = results[numero].media.smallImageUrl;
                immagine.addEventListener("click", apriModale);

                //Carichiamo e rendiamo cliccabili le icone "Preferiti" e "ShopCart"
                const sez_int = document.createElement("div");
                sez_int.classList.add("sezione_fav_shop");
                const stella = document.createElement("img");
                stella.src = "../img/unfav.png";
                stella.classList.add("icone")
                const shopCart = document.createElement("img");
                shopCart.src = "../img/noShop.png";
                shopCart.classList.add("icone");
                stella.addEventListener("click", clickedStar);
                shopCart.addEventListener("click", clickedShopCart);

                const prezzo = document.createElement("h2");
                if(results[numero].retailPrice == 0){
    
                    prezzo.textContent = "100€";
    
                }else{
    
                    prezzo.textContent = results[numero].retailPrice + "€";
    
                }
                sezione.appendChild(ID);
                sezione.appendChild(Brand);
                sezione.appendChild(nome);
                sezione.appendChild(colore);
                sezione.appendChild(immagine);
                sezione.appendChild(prezzo);
                sez_int.appendChild(stella);
                sez_int.appendChild(shopCart);
                sezione.appendChild(sez_int);
                vista.appendChild(sezione);
            }
            
        }

    }

}

//------------------------------------------------------Stampare Scarpe RANDOM------------------------------------------------------

function printRandomShoes(json){

    let noe = getNumberOfElement();

    //console.log("JSON Ricevuto -->", json);
    const results = json.results;
    
    const vista = document.querySelector('#vista');
    vista.classList.remove("loading");
    vista.innerHTML = ' ';
    
    if(results.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

        randomArray = getRandomArray();

        for(let i = 0; i<noe; i++){

            let numero = randomArray[i];

            if(results[numero].media.smallImageUrl == null){

                //console.log("Dentro Condizione Immagine nulla");
                noe++;
                //Vi sono alcune scarpe che sono senza immagine, quindi non ha senso farla stampare...
                //Implementa fattore che se non ha l'immagine stampa meno scarpe...
                

            }else{

                const sezione = document.createElement("div");
                sezione.classList.add("album_scarpe");
                const nome = document.createElement("p");
                nome.textContent = results[numero].name;

                //Prendo l'ID della scarpa ma non lo rendo visibile
                const ID = document.createElement("p");
                ID.textContent = results[numero].id;
                ID.classList.add("hidden");

                //Prendo il Brand della scarpa ma non lo rendo visibile
                const Brand = document.createElement("p");
                Brand.textContent = results[numero].brand;
                Brand.classList.add("hidden");

                const colore = document.createElement("p");
                colore.textContent = results[numero].colorway;
                const immagine = document.createElement("img");
                immagine.src = results[numero].media.smallImageUrl;
                immagine.addEventListener("click", apriModale);

                const sez_int = document.createElement("div");
                sez_int.classList.add("sezione_fav_shop");
                const stella = document.createElement("img");
                stella.src = "../img/unfav.png";
                stella.classList.add("icone")
                const shopCart = document.createElement("img");
                shopCart.src = "../img/noShop.png";
                shopCart.classList.add("icone");
                stella.addEventListener("click", clickedStar);
                shopCart.addEventListener("click", clickedShopCart);

                const prezzo = document.createElement("h2");
                if(results[numero].retailPrice == 0){
    
                    prezzo.textContent = "100€";
    
                }else{
    
                    prezzo.textContent = results[numero].retailPrice + "€";
    
                }
                sezione.appendChild(ID);
                sezione.appendChild(Brand);
                sezione.appendChild(nome);
                sezione.appendChild(colore);
                sezione.appendChild(immagine);
                sezione.appendChild(prezzo);
                sez_int.appendChild(stella);
                sez_int.appendChild(shopCart);
                sezione.appendChild(sez_int);
                vista.appendChild(sezione);

            }
    
        }

    }

}

//------------------------------------------------------Stampare Scarpe RANDOM------------------------------------------------------



//------------------------------------------------------Cercare Scarpe Specifiche------------------------------------------------------

function search(event){

    event.preventDefault();

    const vista = document.querySelector("#vista_dinamica");
    vista.innerHTML = " ";
    vista.textContent = " CARICAMENTO... ";
    vista.classList.add("loading");

    const valTB = document.querySelector('#contenuto_textbox').value;
    
    if(valTB){

        const toSearch = encodeURIComponent(valTB);
        console.log("Dobbiamo Cercare -> ", toSearch);

        const tipo = document.querySelector("#tipo").value;
        console.log("Sottoforma di -> ", tipo);

        if(tipo === "brand"){ //Richiesta Stampa scarpe per Brand


            const endPointAPISnakers = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100";
            const HOST = "v1-sneakers.p.rapidapi.com";
            const KEY = "55c9f6e8bemsh746fb4baec5314cp15e0c6jsnd245799b374f";
           
           fetch(endPointAPISnakers + "&" + tipo + "=" + toSearch,
           {
               method: 'GET',
               headers: {
                   'X-RapidAPI-Host': HOST,
                   'X-RapidAPI-Key': KEY
               }
           }
           ).then(onResponse).then(printSpecificShoes);

        }else if(tipo === "name"){ //Richiesta Stampa scarpe per Nome

            const endPointAPISnakers = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100";
            const HOST = "v1-sneakers.p.rapidapi.com";
            const KEY = "55c9f6e8bemsh746fb4baec5314cp15e0c6jsnd245799b374f";
           
           fetch(endPointAPISnakers + "&" + tipo + "=" + toSearch,
           {
               method: 'GET',
               headers: {
                   'X-RapidAPI-Host': HOST,
                   'X-RapidAPI-Key': KEY
               }
           }
           ).then(onResponse).then(printSpecificShoes);

        }

    }

}

//------------------------------------------------------Cercare Scarpe Specifiche------------------------------------------------------



//------------------------------------------------------Codice per Modale------------------------------------------------------

function apriModale(event) {

	const image = document.createElement('img');
	image.id = 'immagine_post';
	image.src = event.currentTarget.src;
	modale.appendChild(image);
	modale.classList.remove('hidden');
	document.body.classList.add('no-scroll');
}

function chiudiModale(event) {
	console.log(event);
	if(event.key === 'Escape')
	{
		modale.classList.add('hidden');
		img = modale.querySelector('img');
		img.remove();
		document.body.classList.remove('no-scroll');
	}
}

//creo il pulsante per la chiusura del post 
window.addEventListener('keydown', chiudiModale);

//------------------------------------------------------Codice per Modale------------------------------------------------------



//-------------------------------- FUNZIONE PER OTTENERE QUANTI ELEMENTI VOGLIAMO FAR STAMPARE --------------------------------

function getNumberOfElement(){

    const variabile = document.querySelector('#numberOfElement').value;
    let noe;

    if(variabile === "dieci"){

        noe = 10;

    }else if(variabile === "quindici"){

        noe = 15;

    }else if(variabile === "venti"){

        noe = 20;

    }

    return noe;

}

//-------------------------------- FUNZIONE PER OTTENERE QUANTI ELEMENTI VOGLIAMO FAR STAMPARE --------------------------------




//------------------------------------------------------Funzione stampa Scarpe RANDOM------------------------------------------------------

const endPointAPISnakers = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100";
const HOST = "v1-sneakers.p.rapidapi.com";
const KEY = "55c9f6e8bemsh746fb4baec5314cp15e0c6jsnd245799b374f";


fetch(endPointAPISnakers,
{
   method: 'GET',
   headers: {
       'X-RapidAPI-Host': HOST,
       'X-RapidAPI-Key': KEY
   }
}
).then(onResponse).then(printRandomShoes);

//------------------------------------------------------Funzione stampa scarpe per Vetrina------------------------------------------------------



function logout(event){

    event.preventDefault();

    fetch(ROUTE_HOME + "/logout").then(onResponse).then(stampaTutto);
    fetch(ROUTE_HOME + "/logout").then(onResponse).then(stampaTutto);

    //Una volta che viene fatta le Sessione_destroy veniamo rimandati nella LOGIN...
    location.href = "/login";

}

//------------------------------------------------------Stampare "Caricamento"------------------------------------------------------

const vista = document.querySelector("#vista");
vista.innerHTML = " ";
vista.textContent = " CARICAMENTO... ";
vista.classList.add("loading");

//------------------------------------------------------Stampare "Caricamento"------------------------------------------------------


const form = document.querySelector("#cerca");
form.addEventListener("submit", search);

form_logout.addEventListener("click", logout);




