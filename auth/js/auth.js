/*
	const variable can't change
	document.getElementById gets a refence to the element in html
*/

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");
const loginUsername = document.getElementById("login-username");

/*
	event listener 
	listening user input, mouse clicks or keyboard presses
	onclick captures a click event
*/

loginButton.onclick = function() {
	fb.login(loginEmail.value, loginPassword.value);

	//loginMessage.textContent = "You logged in.";
};

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;

}

function userLoggedIn(uid,displayName) {
	loginUsername.textContent = "Welcome" + displayName;
}

