function fetchResponse(response){

	console.log("Response -> ", response.ok);

	if(response.ok){

		return response.json();

	}else{

		return null;

	}

}

function removeFromFav(event){

    const ID = event.path[1].children[0].textContent;

    console.log("Event -> ", event);
    console.log("ID -> ", ID);
    const Funzione = "preferiti";

    //fetch("../PHP/delete.php?q=" + encodeURIComponent(ID) + "-----" + encodeURIComponent("preferiti"));
    fetch(ROUTE_HOME 	+ "/ID/" + encodeURIComponent(ID) + "/Funzione/" +encodeURIComponent(Funzione));

    location.href = "/listaPreferiti";

    

}

function jsonStampaFav(json){

	//console.log("File JSON --->", json.vettScarpa);
    console.log("File JSON --->", json);
    const vettScarpe = json.vettScarpe;
    let sommaPrezzi = 0;

    const vista = document.querySelector('#favList');
    vista.classList.remove("loading");
    vista.innerHTML = ' ';
    
    if(vettScarpe == "No_Element"){

        const errorMsg = document.createElement("h1");
        errorMsg.textContent = "Nessun Elemento presente nei Preferiti...";
        errorMsg.classList.add(".remove");
        vista.appendChild(errorMsg);

    }else{

        const lung = vettScarpe.length;
        console.log("Lungh ->", lung);

        for(let i = 0; i<lung; i++){

                const sezione = document.createElement("div");
                sezione.classList.add("album_scarpe");

                const nome = document.createElement("p");
                nome.textContent = vettScarpe[i][0].Nome;

                //Prendo l'ID della scarpa ma non lo rendo visibile
                const ID = document.createElement("p");
                ID.textContent = vettScarpe[i][0].ID;
                ID.classList.add("hidden");

                //Prendo il Brand della scarpa ma non lo rendo visibile
                const Brand = document.createElement("p");
                Brand.textContent = vettScarpe[i][0].Brand;

                const immagine = document.createElement("img");
                immagine.src = vettScarpe[i][0].URLFoto;

                const Prezzo = document.createElement("p");
                Prezzo.textContent = vettScarpe[i][0].Prezzo + "€";
                sommaPrezzi = sommaPrezzi + parseInt(vettScarpe[i][0].Prezzo);

                const Messaggio = document.createElement("p");
                Messaggio.textContent = "Rimuovi dal Carrello!";
                Messaggio.classList.add("remove");
                Messaggio.addEventListener("click", removeFromFav);

                sezione.appendChild(ID);
                sezione.appendChild(nome);
                sezione.appendChild(Brand);
                sezione.appendChild(immagine);
                sezione.appendChild(Prezzo);
                sezione.appendChild(Messaggio);
                vista.appendChild(sezione);
        }

    }

    const tot = document.querySelector('#Totale');
    tot.innerHTML = '';
    if(sommaPrezzi == 0){

        tot.textContent = "0€";

    }else{

        tot.textContent = sommaPrezzi + "€";

    }

}

const vista = document.querySelector("#favList");
vista.innerHTML = " ";
vista.textContent = " CARICAMENTO... ";
vista.classList.add("loading");

let Username;

Username = document.querySelector("#header h1");
console.log("Username -> ", Username.textContent);

//fetch("../PHP/prelevaDaFav.php?q=" + encodeURIComponent(Username.textContent)).then(fetchResponse).then(prelevaFavList);
fetch(ROUTE_PREFERITI + "/Username/" + encodeURIComponent(Username.textContent)).then(fetchResponse).then(jsonStampaFav);


function goToHome(){

    location.href = "/home";

}

const indietro = document.querySelector("#goBack img");
indietro.addEventListener("click", goToHome);
