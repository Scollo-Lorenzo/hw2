function fetchResponse(response){

	console.log("Response -> ", response.ok);

	if(response.ok){

		return response.json();

	}else{

		return null;

	}

}
// ----------------------------------------------- Controllo USERNAME -----------------------------------------------

function jsonCheckUsername(json){

	const userIns = nome_form_reg.Username;
	console.log("Tipo Errore su USERNAME --->", json[0].errore);
	const erroreUser = json[0].errore;

	if(userIns.classList.value == "erroreInsBox"){

		userIns.classList.remove("erroreInsBox");
		userIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		userIns.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(erroreUser == "username_gia_esistente")
	{

		userIns.parentNode.parentNode.querySelector("span").textContent = "Questo Username è gia presente nel Nostra DataBase";
		userIns.classList.add("erroreInsBox");
		userIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(userIns.classList);

	}else if(erroreUser == "username_non_valido"){

		userIns.parentNode.parentNode.querySelector("span").textContent = "Questo Username NON soddisfa le condizioni sui Caratteri";
		userIns.classList.add("erroreInsBox");
		userIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(userIns.classList);

	}

}

function checkUsername(event){

	const userIns = nome_form_reg.Username;
	//console.log("User ->", userIns);

	if(userIns.value.length == 0){

		userIns.parentNode.parentNode.querySelector("span").textContent = "No Username Inserito";
		userIns.classList.add("erroreInsBox");
		userIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(userIns.classList);

	}else{

		if(userIns.classList.value == "erroreInsBox"){

			userIns.classList.remove("erroreInsBox");
			userIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			userIns.parentNode.parentNode.querySelector("span").textContent = "";

		}

		fetch(PROVA_ROUTE 	+ "/Username/" + encodeURIComponent(userIns.value)
							+ "/Email/" + encodeURIComponent("vuoto")
							+ "/DataNascita/" + encodeURIComponent("vuoto")
							+ "/Password/" + encodeURIComponent("vuoto")).then(fetchResponse).then(jsonCheckUsername);

	}

}

// ----------------------------------------------- Controllo USERNAME -----------------------------------------------



// ----------------------------------------------- Controllo EMAIL -----------------------------------------------

function jsonCheckEmail(json){

	const emailIns = nome_form_reg.Email;
	console.log("Tipo Errore su EMAIL --->", json[1].errore);
	const erroreEmail = json[1].errore;

	if(emailIns.classList.value == "erroreInsBox"){

		emailIns.classList.remove("erroreInsBox");
		emailIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		emailIns.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(erroreEmail == "email_non_valida") //Quindi se json = True quindi se il CF inserito è già presente, segnaliamo l'errore
	{

		emailIns.parentNode.parentNode.querySelector("span").textContent = "Email NON Valida";
		emailIns.classList.add("erroreInsBox");
		emailIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(emailIns.classList);

	}

}

function checkEmail(event){

	const emailIns = nome_form_reg.Email;

	if(emailIns.value.length == 0){

		emailIns.parentNode.parentNode.querySelector("span").textContent = "No Email Inserita";
		emailIns.classList.add("erroreInsBox");
		emailIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");

	}else{

		if(emailIns.classList.value == "erroreInsBox"){

			emailIns.classList.remove("erroreInsBox");
			emailIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			emailIns.parentNode.parentNode.querySelector("span").textContent = "";

		}

			fetch(PROVA_ROUTE 	+ "/Username/" + encodeURIComponent("vuoto")
								+ "/Email/" + encodeURIComponent(emailIns.value)
								+ "/DataNascita/" + encodeURIComponent("vuoto")
								+ "/Password/" + encodeURIComponent("vuoto")).then(fetchResponse).then(jsonCheckEmail);

	}

}

// ----------------------------------------------- Controllo EMAIL -----------------------------------------------



// ----------------------------------------------- Controllo DATA DI NASCITA -----------------------------------------------

function jsonCheckData(json){

	const dataIns = nome_form_reg.DataNascita;
	console.log("Tipo di Errore sulla DATA --->", json[2].errore);
	const erroreData = json[2].errore;


	if(dataIns.classList.value == "erroreInsBox"){

		dataIns.classList.remove("erroreInsBox");
		dataIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		dataIns.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(erroreData !== "no_error")
	{

		dataIns.parentNode.parentNode.querySelector("span").textContent = "Data NON Valida";
		dataIns.classList.add("erroreInsBox");
		dataIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(dataIns.classList);

	}

}

function checkData(event){

	const dataIns = nome_form_reg.DataNascita;

	if(dataIns.value.length == 0){

		dataIns.parentNode.parentNode.querySelector("span").textContent = "No Data di Nascita Inserita";
		dataIns.classList.add("erroreInsBox");
		dataIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(dataIns.classList);

	}else{

		if(dataIns.classList.value == "erroreInsBox"){

			dataIns.classList.remove("erroreInsBox");
			dataIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			dataIns.parentNode.parentNode.querySelector("span").textContent = "";

		}

			fetch(PROVA_ROUTE 	+ "/Username/" + encodeURIComponent("vuoto")
								+ "/Email/" + encodeURIComponent("vuoto")
								+ "/DataNascita/" + encodeURIComponent(dataIns.value)
								+ "/Password/" + encodeURIComponent("vuoto")).then(fetchResponse).then(jsonCheckData);

	}

}

// ----------------------------------------------- Controllo DATA DI NASCITA -----------------------------------------------



// ----------------------------------------------- Controllo PASSWORD -----------------------------------------------

function jsonCheckPassword(json){

	const passIns = nome_form_reg.Password;
	console.log("File JSON --->", json[3].errore);
	const errorePass = json[3].errore;

	if(passIns.classList.value == "erroreInsBox"){

		passIns.classList.remove("erroreInsBox");
		passIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		passIns.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(errorePass == "password_troppo_corta") //Quindi se json = True quindi se il CF inserito è già presente, segnaliamo l'errore
	{

		passIns.parentNode.parentNode.querySelector("span").textContent = "Questa Password è Troppo Corta";
		passIns.classList.add("erroreInsBox");
		passIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(passIns.classList);

	}else if (errorePass == "password_non_valida"){

		passIns.parentNode.parentNode.querySelector("span").textContent = "Questa Password non rispetta le specifiche";
		passIns.classList.add("erroreInsBox");
		passIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(passIns.classList);

	}

}

function checkPassword(event){

	const passIns = nome_form_reg.Password;

	if(passIns.value.length == 0){ //Aggiungere Condizioni sulle lettere che devono essere MAIUSCOLE e che dev'essere esattamente lungo 16 caratteri

		passIns.parentNode.parentNode.querySelector("span").textContent = "No Password Inserito";
		passIns.classList.add("erroreInsBox");
		passIns.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(passIns.classList);

	}else{

		if(passIns.classList.value == "erroreInsBox"){

			passIns.classList.remove("erroreInsBox");
			passIns.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			passIns.parentNode.parentNode.querySelector("span").textContent = "";

		}

		fetch(PROVA_ROUTE 	+ "/Username/" + encodeURIComponent("vuoto")
							+ "/Email/" + encodeURIComponent("vuoto")
							+ "/DataNascita/" + encodeURIComponent("vuoto")
							+ "/Password/" + encodeURIComponent(passIns.value)).then(fetchResponse).then(jsonCheckPassword);
	}
}

// ----------------------------------------------- Controllo PASSWORD -----------------------------------------------

function clickSubmit(event){

	const user = nome_form_reg.Username;
	const email = nome_form_reg.Email;
	const data = nome_form_reg.DataNascita;	
	const password = nome_form_reg.Password;

	const errorMsg = document.querySelector("#errorMsg");
	console.log("errorMsg ->", errorMsg);

	if(errorMsg.classList.value == "erroreInsText"){

		console.log("Condizione ok");
		errorMsg.classList.remove("erroreInsText");
		errorMsg.textContent = " ";

	}

	if(	user.classList.value == "erroreInsBox" || user.value.length == 0 ||
		email.classList.value == "erroreInsBox" || email.value.length == 0 ||
		data.classList.value == "erroreInsBox" || data.value.length == 0 ||
		password.classList.value == "erroreInsBox" || password.value.length == 0){

		event.preventDefault();
		errorMsg.textContent = "Assicurati che i campi siano compliati correttamente";
		errorMsg.classList.add("erroreInsText");

	}else{

		//Semplicemente in questo caso è tutto ok e si può procedere con la registrazione, "lasciando correre" il Submit
	
	}

}


nome_form_reg.Username.addEventListener("blur", checkUsername);
nome_form_reg.Email.addEventListener("blur", checkEmail);
nome_form_reg.DataNascita.addEventListener("blur", checkData);
nome_form_reg.Password.addEventListener("blur", checkPassword);
nome_form_reg.addEventListener("submit", clickSubmit);

