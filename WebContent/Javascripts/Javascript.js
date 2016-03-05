var signUpForm = "<div id = \"test\">" +
			"<div id=\"login\">" +
			"<h1>Log in</h1>" +
			"<form onsubmit=\"return signUp()\">" +
			"<input type=\"text\" id=\"name\" placeholder=\"Name\" />" +
			"<input type=\"email\" id=\"email\" placeholder=\"Email\" />" +
			"<input type=\"tel\" pattern=\"[0-9\-]+\" id=\"phone\" placeholder=\"Phone\" />" +
			"<input type=\"password\" placeholder=\"Password\" />" +
			"<input type=\"submit\" value=\"Log in\" />" +
			"</form>" +
			"</div>" +
			"<a href=\"#\" class=\"LoginButton\" id=\"toggle-login\" onClick=\"loadSignIn()\">Sign In</a>" +
			"</div>";

var signInForm = "<div id = \"test\">" +
		"<div id=\"login\">" +
		"<h1>Log in</h1>" +
		"<form onSubmit = \"return signIn()\">" +
		"<input type=\"email\" id =\"email\" placeholder=\"Email\" />" +
		"<input type=\"password\" id = \"password\" placeholder=\"Password\" />" +
		"<input type=\"submit\" value=\"Log in\"/>" +
		"</form>" +
		"</div>" +
		"<a href=\"#\" class=\"LoginButton\" id=\"toggle-login\" onClick=\"loadSignUp()\">Sign Up</a>" +
		"</div>";

function loadSignIn() {
	$("#signs").empty();
	$("#signs").append(signInForm);	
}

function loadSignUp() {
	$("#signs").empty();
	$("#signs").append(signUpForm);
}

function signIn() {
	var email = $("#email").val();
	var password = $("#password").val();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			alert(xhttp.responseText);
		}
	};
	xhttp.open("POST", "/Transporter/Login", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("uname="+email+"&passwd="+password);
}

function signUp() {
	var name = $("#name").val();
	var email = $("#email").val();
	var tel = $("#tel").val();
	var password = $("#password").val();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			alert(xhttp.responseText);
		}
	};
	xhttp.open("POST", "/Transporter/Login", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("name="+name+"&email="+email+"&tel"+tel+"&password"+password);
}

/*Slider Function -Start */
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
/*Slider Function -End */