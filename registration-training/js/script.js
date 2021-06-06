import { User } from '/Classes/User.js';

const regForm = document.querySelector("#registerform");

document.querySelector("#registerform button").addEventListener("click", function(){

	const firstname = regForm.firstname.value;
	const lastname = regForm.lastname.value;
	const email = regForm.email.value;
	const password = regForm.password.value;
	const username = regForm.username.value;



	//const user = new User(firstname, lastname, email, password, username);

	const user = new User();


	//Check the user information
	const feedback = user.checkInfo(firstname, lastname, email, password, username);

	if(feedback.length > 0){
		//there is error ..
		feedback.forEach((error) =>{
			toastr.warning(`${error}`);
		})
	}else{

		//there is no error
		user.registerUser();

	}

});