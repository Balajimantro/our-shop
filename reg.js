const form = document.getElementById("form");
const uname = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', e =>{
	e.preventDefault();  
	checkinput();
});



function checkinput(){
	const usernameValue = uname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();
				
					if(usernameValue === ''){
						setError(uname, 'username must required');
					}
					else
					{
						setSuccess(uname);checkinput();
					}

					if(emailValue === ''){
						 setError(Email, 'email must required');
					}
					
					else{
						setSuccess(Email);
					}
					if(passwordValue === ''){
						setError(password, 'password must required');
					}
					else if(passwordValue.lenght == 8){
						setError(Password, 'password must be 8 characters.')
					}
					else{
						setSuccess('Password');
					}
					if(cpasswordValue === ''){
						setError(cpassword, 'confirmpassword must required');
					}
					else if(passwordValue !== cpasswordValue){
						setError('password cannot matched');
					}
					else{
						setSuccess(cpassword);
					}
}


function setError(input, message){
	const formcontrol = input.parentElement;
	const error = formcontrol.querySelector('.error');
	formcontrol.className = 'form-control error';
	error.innertext = message;
}

function setSuccess(){
	const formcontrol = input.parentElement;
	formcontrol.className = 'form-control success';
}



function checkinput();