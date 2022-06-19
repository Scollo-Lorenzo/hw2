function checkUserPassword(event){

	
	const userIns = nome_form_login.Username;
	const passIns = nome_form_login.Password;

	const errorMsg = document.querySelector("#errorMsg");
	console.log("errorMsg ->", errorMsg);

	if(errorMsg.classList.value == "erroreInsText"){

		errorMsg.classList.remove("erroreInsText");
		errorMsg.textContent = " ";

	}

	if(	userIns.classList.value == "erroreInsBox" || userIns.value.length == 0 ||
		passIns.classList.value == "erroreInsBox" || passIns.value.length == 0){

		event.preventDefault();
		errorMsg.textContent = "Assicurati che i campi siano compliati correttamente";
		errorMsg.classList.add("erroreInsText");

		if(userIns.classList.value == "erroreInsBox"){ //Se è gia presente un messaggio di errore lo toglie (x l'Username)

			userIns.classList.remove("erroreInsBox");
			userIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			userIns.parentNode.parentNode.querySelector("span").textContent = "";
	
		}
	
		if(passIns.classList.value == "erroreInsBox"){ //Se è gia presente un messaggio di errore lo toglie (x la Password)
	
			passIns.classList.remove("erroreInsBox");
			passIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			passIns.parentNode.parentNode.querySelector("span").textContent = "";
	
		}
	
		if(userIns.value.length == 0){ //Controlla che sia effettivamente inserito qualcosa nella textbox dell'Username
	
			userIns.parentNode.parentNode.querySelector("span").textContent = "No Username Inserito";
			userIns.classList.add("erroreInsBox");
			userIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
			console.log(userIns.classList);
	
		}
		
		if(passIns.value.length == 0){ //Controlla che sia effettivamente inserito qualcosa nella textbox della Password
	
			passIns.parentNode.parentNode.querySelector("span").textContent = "No Password Inserita";
			passIns.classList.add("erroreInsBox");
			passIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
			console.log(passIns.classList);
	
		}

	}else{

		//event.preventDefault();
		fetch(ROUTE_LOG + "/username/" + encodeURIComponent(userIns.value) + "/password/" + encodeURIComponent(passIns.value)).then(fetchResponse).then(jsonStampaTutto);
		
		var delayInMilliseconds = 3000; //1 second
		setTimeout(function() {
		//your code to be executed after 1 second

			console.log("OK");

		}, delayInMilliseconds);
		

	}

}


function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function jsonStampaTutto(json){

	console.log("JSON --->", json);

	if(json.Coincidono == "si"){

		//Fai accesso

	}else{

		const errorMsg = document.querySelector("#errorMsg");
		console.log("errorMsg ->", errorMsg);
	
		if(errorMsg.classList.value == "erroreInsText"){
	
			errorMsg.classList.remove("erroreInsText");
			errorMsg.textContent = " ";
	
		}

		errorMsg.textContent = "Credenziali NON Corrette... riprova";
		errorMsg.classList.add("erroreInsText");
		

	}

}



nome_form_login.bottoneLogin.addEventListener("click", checkUserPassword);

