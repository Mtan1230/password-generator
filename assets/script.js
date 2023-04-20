// Assignment Code
const generateBtn = document.querySelector("#generate");
let charPool = [];
const lowercaseLetters = 'abcdefghijkmnopqrstuvwxyz'.split('');
const uppercaseLetters = 'ABCDEFGHJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');
const specialChar = '~!@#$%^&+-<>?_'.split('');
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
  generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password.stringContent;

  //Reset password.stringContent to empty
  password.stringContent = "";
}

//Generate a password with a series of criteria
function generatePassword() {
  setPasswordLen ();
  //Reset charPool;
  charPool = [];
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
  let i = 0;
  if (password.inclLowercase = confirm("Please confirm whether or not to include lowercase letters.")) {
    charPool[i] = lowercaseLetters;
    i++;
  } else {
  }

  if (password.inclUppercase = confirm("Please confirm whether or not to include uppercase letters.")) {
    charPool[i] = uppercaseLetters;
    i++;
  } else {
  }

  if (password.inclNumeric = confirm("Please confirm whether or not to include numbers.")) {
    charPool[i] = numbers;
    i++;
  } else {
  }
  
  if (password.inclSpecialChar = confirm("Please confirm whether or not to include special characters.")) {
    charPool[i] = specialChar;
  } else {
  }

  if(password.inclLowercase || password.inclUppercase || password.inclNumeric || password.inclSpecialChar) {
    generateString ();
  } else {
    alert("Sorry, please select at least one character type.");
    setCharType();
  }
}

//Generate password string
function generateString() {
  for (let i = 0; i < password.stringLength ; i++) {
    let a = Math.floor(Math.random()*charPool.length); 
    let b = Math.floor(Math.random()*(charPool[a].length));
    // console.log(charPool[a][b]);
    password.stringContent = password.stringContent.concat(charPool[a][b]);
    // console.log(password.stringContent);
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
    // !THEN my input should be validated and at least one character type should be selected
    // !WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page