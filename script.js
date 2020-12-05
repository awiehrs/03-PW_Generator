// Button variable
var generateBtn = document.querySelector("#generate");

// Activates Generate Password button, runs the "writePassword" function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() { 
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want numbers?");
  var specialChar = confirm("Do you want special characters? (Such as '$,%,!,^')");
  //Alert for if user does not select any criteria, or to proceed with generating password
  if (upperCase === false && lowerCase === false && numbers === false && specialChar === false)
  { alert("Your password must have at least one criteria set. Please try again.")
    passwordText.value="Please try again.";
  }
  else { 
    passwordText.value ="";
    passwordText.value = generatePassword(passwordLength,upperCase,lowerCase,specialChar,numbers);
  }
}

//Function that generates random characters for password
function generatePassword(passwordLength, upperCase, lowerCase, specialChar, numbers) {
  var passwordText = "";
  var userPasswordLength = 0;

  while (userPasswordLength < passwordLength) {
    if ((upperCase === true) && (userPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*26)+65);
      userPasswordLength++;
    }
    if ((lowerCase === true) && (userPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*26)+97);
      userPasswordLength++;
    }
    if ((numbers === true) && (userPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*10)+48);
      userPasswordLength++;
    }
    if ((specialChar === true) && (userPasswordLength < passwordLength)) {
      passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*15)+33);
      userPasswordLength++;
    }
  }
  return passwordText;
}
