var demo_pass = "durrow19"; 
var attempts = 0;

// Repeatedly prompt for user password until success:
(function promptPass() {

  var psw = prompt("Please enter your password");

  if (psw !== demo_pass && attempts < 2) {
    alert("Incorrect Password. Please try again.");
    attempts += 1;
    return promptPass();
  }

}());

document.getElementById("hideAll").style.display = "none"; 
