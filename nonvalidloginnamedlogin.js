// Name and Password from the register-form
var username = document.getElementById('username');
var password = document.getElementById('password');
//document.getElementById("container").style.display="none";
// storing input from register-form
function store() {

}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedpassword = localStorage.getItem('password');

    // entered data from the login-form
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(username.value == storedName && password.value == storedpassword) {
       // alert("hi");
        //window.location.href = "user.html";
        //document.getElementById("container").style.visibility="visible";
		console.log('loggedin');
		alert('you have been loggedin');
		document.getElementById("login-form").style.visibility = "hidden"; 
        
    }else {
		alert('you have been registered');
       // document.getElementById("container").style.display="none";
		localStorage.setItem('username', username.value);
		localStorage.setItem('password', password.value);
        //alert('registerd.');
		console.log(username.value);
		console.log(password.value);
    }
}