/*

	const variable can't change

	document.getElementById gets a refence to the element in html

*/



const signUpEmail = document.getElementById("sign-up-email");

const signUpPassword = js.getEl("sign-up-password");

const signUpButton = js.getEl("sign-up-button");

const signUpMessage = js.getEl("sign-up-message");

const signUpUserName = js.getEl("sign-up-username");



signUpButton.onclick = function() {

	fb.create( signUpUserName.value, signUpEmail.value, signUpPassword.value);

};



function onError(errorMessage) {

	signUpMessage.textContent = errorMessage;

}


