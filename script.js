// Button variable
var generateBtn = document.querySelector("#generate");

// Activates Generate Password button, runs the "writePassword" function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() { 
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  var passwordLength = prompt("Choose a length for your password between 8-128 characters");
    if (passwordLength < 8 ){
      alert("Your password must be at least 8 characters long. Please try again.");
      return;
    }
    else if (passwordLength > 128){
      alert("Your password must be less than 128 characters. Please try again.");
      return;
    }
   // Alert to give directions to user on how to select criteria
  alert("The following prompts will ask for your password criteria. Please press 'OK' for 'Yes', and 'Cancel' for 'No'.");

}




/* function generatePassword() {

}

/*function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
} */