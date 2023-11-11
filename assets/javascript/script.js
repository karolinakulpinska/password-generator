// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var pwdLength;
var lowerCase;
var upperCase;
var numbers;
var specialChar;
var pwdFinal;

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user for password length and return an integer (store in a variable)
  pwdLength = parseInt(prompt("Please specify the length of your password - enter a number between 8 and 128."));
    // If user chose incorrect number alert (not a number, lesser than 8, bigger than 128)
    if (pwdLength === isNaN || pwdLength < 8 || pwdLength > 128) {
      alert("Please enter a valid number between 8 and 128.");
    // If user chose correct number, confirm the kind of characters and store in a variable
    } else {
      lowerCase = confirm("Would you like your new password to include lowercase characters?");
      upperCase = confirm("Would you like your new password to include lowercase characters?");
      numbers = confirm("Would you like your new password to include numbers?");
      specialChar = confirm("Would you like your new password to include special characters?");
      // If user chose correct number and at least one option of characters, return
        if (lowerCase || upperCase || numbers || specialChar) {
          return getRandom(lowerCase, upperCase, numbers, specialChar, pwdLength);
        }
    }
}

// Function for getting a random element from an array
function getRandom(lowerCase, upperCase, numbers, specialChar, pwdLength) {
  // for loop with if statements for user choices of characters using Math.random(), store each in a variable and add to the final password
  for (var i = 0; i < pwdLength.length; i++) {
    // lower case
    if (lowerCase && pwdFinal.length) {
      var index = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
      pwdFinal += lowerCasedCharacters[index];
    };
    // upper case
    if (upperCase && pwdFinal.length) {
      var index = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
      pwdFinal += upperCasedCharacters[index];
    };
    // numbers
    if (numbers && pwdFinal.length) {
      var index = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
      pwdFinal += numericCharacters[index];
    };
    // special characters
    if (specialChar && pwdFinal.length) {
      var index = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
      pwdFinal += specialCharacters[index];
    }
  }
  // return final password
  return pwdFinal;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);