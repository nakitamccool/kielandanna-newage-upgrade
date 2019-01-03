var demo_pass = "durrow19"; 

// Repeatedly prompt for user password until success:
(function promptPass() {

  var psw = prompt("Please enter your password");

  while (psw !== demo_pass) {
    alert("Incorrect Password. Please try again.");
    return promptPass();
  }

}());

document.getElementById("hideAll").style.display = "none"; 
