// Assignment Code
const generateBtn = document.querySelector("#generate");
const password = {
  stringLength: 0,
  inclLowercase: false,
  inclUppercase: false,
  inclNumeric: false,
  inclSpecialChar: false,
  stringContent: "",
}

// Write password to the #password input
function writePassword() {
  password.stringContent = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password.stringContent;

}

//Generate a password with a series of criteria
function generatePassword() {
  setPasswordLen ();

}

//Set the length of the password
function setPasswordLen() {
  const setLen = prompt("Please choose the length of your password (at least 8 characters, and no more than 128 characters", "Enter 8-128");
  if (setLen >= 8 && setLen <= 128) {
    password.stringLength = setLen;
    setCharType ();
  } else if (setLen) {
    alert("Sorry, it's not a valid number.");
    setPasswordLen();
  } else {
    endGenerator();
  }
}

//Set password character types
function setCharType () {
  password.inclLowercase = confirm("Please confirm whether or not to include lowercase letters.");
  password.inclUppercase = confirm("Please confirm whether or not to include uppercase letters.");
  password.inclNumeric = confirm("Please confirm whether or not to include numbers.");
  password.inclSpecialChar = confirm("Please confirm whether or not to include special characters.");
  if(password.inclLowercase || password.inclUppercase || password.inclNumeric || password.inclSpecialChar) {
    // setPasswordContent ();
  } else {
    alert("Sorry, please select at least one character type.");
    setCharType();
  }
}

//End the process
function endGenerator() {
  alert("Thanks for using!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// !WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
    // !WHEN prompted for the length of the password
    // !THEN I choose a length of at least 8 characters and no more than 128 characters
    // !WHEN asked for character types to include in the password
    // !THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // !WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page