let id = (id)=> document.getElementById(id);
let classes = (classes)=> document.getElementsByClassName(classes);

const form = id('form');
const usernameInput = id('username');
const emailInput = id('email');
const passwordInput = id('password');
const confirmpasswordInput = id('cpassword');
const succesIcon = document.querySelector('.error');
const errorIcon = document.querySelector('.success');


form.addEventListener('submit', e =>{
	e.preventDefault();

	 	//username
		//username
		//username
	if(usernameInput.value.trim() === ''){
		setError(usernameInput, '*Name can not be empty');
	}else if (usernameInput.value.trim().length <5 || usernameInput.value.trim().length >15){
		setError(usernameInput, '*Name must be 5 to 15 characters');
	}
	else{
		setSuccess(usernameInput, 'valid');
	}

	//email

	if(emailInput.value.trim() ===''){
		setError(emailInput, '*Provide valid mail id');
	}
	else {
		setSuccess(emailInput, 'valid');
	}
	

	//password
	if(passwordInput.value.trim() === '')  {
		setError(passwordInput, '*password must be fill');
	}else if(passwordInput.value.trim().length <8){
		setError(passwordInput, '*password must be 8 characters')
	}
	else{
		setSuccess(passwordInput, 'valid');
	}
	

	//cpassword

	if(confirmpasswordInput.value.trim() === ''){
		setError(confirmpasswordInput, '*password must be fill');
	}
	else if (confirmpasswordInput.value.trim() !== passwordInput.value.trim() || passwordInput.value.trim().length <8){
		setError(confirmpasswordInput, '*password can not matched (or) password must be 8 characters');
	}
	else {
		setSuccess(confirmpasswordInput, 'valid');
	}
	


});

function setError(element, errorMessage){
	const parent = element.parentElement;
	if(parent.classList.contains('success')){
		parent.classList.remove('success');
	}
	parent.classList.add('error');
	const paragraph = parent.querySelector('p');
	paragraph.innerHTML = errorMessage;
}

function setSuccess(element, errorMessage){
	const parent = element.parentElement;
	if(parent.classList.contains('error')){
		parent.classList.remove('error');
	}
	parent.classList.add('success');
	const paragraph = parent.querySelector('p');
	paragraph.innerHTML = errorMessage;
	
}
//-------------------------------------------------------slide----------------//

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');


hamburger.addEventListener('click',()=> {
	navbar.classList.toggle('slide');
	


})