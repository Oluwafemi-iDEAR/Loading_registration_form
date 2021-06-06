export class User{

	firstname = null;
	lastname = null;
	email = null;
	password = null;
	username = null;

	registration_error = [];


	constructor(){

		/*this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.username = username;

		*/

		//toastr.success(`Congrats ${this.firstname} ${this.lastname}`);


	}

	checkInfo(firstname, lastname, email, password, username){

		firstname = firstname.trim();
		lastname = lastname.trim();
		email = email.trim();
		password = password.trim();
		username = username.trim();


		if(firstname.length == 0){
			this.registration_error.push('Please enter your first name');
		}else{
			this.firstname = firstname;
		}

		if(lastname.length == 0){
			this.registration_error.push('Please enter your last name');
		}else{
			this.lastname = lastname;
		}

		if(email.length == 0){
			this.registration_error.push('Please enter your email name');
		}else{
			this.email = email;
		}

		if(password.length == 0){
			this.registration_error.push('Please enter your password');
		}else{
			this.password = password;
		}

		if(username.length == 0){
			this.registration_error.push('Please enter your username');
		}else{
			this.username = username;
		}


		if(this.registration_error.length > 0){
			return this.registration_error;
		}


		return [];
	}


	registerUser(){

		toastr.success(`Congrats ${this.firstname} ${this.lastname}`);
	}



}