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
  const passwordText = document.querySelector("#password");
  generatePassword();
  passwordText.value = password.stringContent;
}

//Start to generate a password
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
  }

  if (password.inclUppercase = confirm("Please confirm whether or not to include uppercase letters.")) {
    charPool[i] = uppercaseLetters;
    i++;
  }

  if (password.inclNumeric = confirm("Please confirm whether or not to include numbers.")) {
    charPool[i] = numbers;
    i++;
  }
  
  if (password.inclSpecialChar = confirm("Please confirm whether or not to include special characters.")) {
    charPool[i] = specialChar;
    i++;
  }

  if(i) {
    generateString ();
  } else {
    alert("Sorry, please select at least one character type.");
    setCharType();
  }
}

//Generate password string
function generateString() {
  //Reset password.stringContent to empty
  password.stringContent = "";
  let a = 0;
  let b = 0;
  let charTypes = []; 
  for (let i = 0; i < password.stringLength; i++) {
    a = Math.floor(Math.random()*charPool.length); 
    if (!charTypes.includes(a)) {
      charTypes = charTypes.concat(a);
    }
    b = Math.floor(Math.random()*(charPool[a].length));
    password.stringContent = password.stringContent.concat(charPool[a][b]);
  }

  //Re-generate if the generated password isn't containing every selected character type
  if (charTypes.length < charPool.length) {
    generateString();
  }
}

//End the process
function endGenerator() {
  alert("Thanks for using!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
