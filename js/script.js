import { User } from '/Classes/User.js';

const regForm = document.querySelector("#registerform");

document.querySelector("#registerform button").addEventListener("click", function(){

	const firstname = regForm.firstname.value;
	const lastname = regForm.lastname.value;
	const email = regForm.email.value;
	const password = regForm.password.value;
	const username = regForm.username.value;



		document.getElementById("roll").innerHTML =
		`<div class="spinner">
		<div class="rect1"></div>
		<div class="rect2"></div>
		<div class="rect3"></div>
		<div class="rect4"></div>
		<div class="rect5"></div>
	  </div>`

	;


	// const user = new User(firstname, lastname, email, password, username);

	const user = new User();

	//chect the user information
	const feedback = user.checkInfo(firstname, lastname, email, password, username);

	if(feedback.length > 0){
		//there is an error
		feedback.forEach((error) =>{
		//console.log(error);
		toastr.warning(`${error}`);
	})
	}


	else{
		//there is no error
		user.registerUser();
	}

	
});