var demo_pass = "Durrow2019"; 


// Repeatedly prompt for user password until success:
(function promptPass() {

  var psw = prompt("Please enter your password");

  while (psw !== demo_pass) {
    alert("Incorrect Password. Please try again.");
    return promptPass();
  }

}());

alert('Welcome to our wedding website!');
document.getElementById("hideAll").style.display = "none"; 


