// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user for password length and return an integer
  var pwdLength = parseInt(prompt("Please specify the length of your password - enter a number between 8 and 128."));
    // If user chose incorrect number alert (not a number, lesser than 8, bigger than 128)
    if (pwdLength === isNaN || pwdLength < 8 || pwdLength > 128) {
      alert("Please enter a valid number between 8 and 128.");
    // If user chose correct number, confirm the kind of characters
    } else {
      var lowerCase = confirm("Would you like your new password to include lowercase characters?");
      var upperCase = confirm("Would you like your new password to include lowercase characters?");
      var numbers = confirm("Would you like your new password to include numbers?");
      var specialChar = confirm("Would you like your new password to include special characters?");
      // If user chose correct number and at least one option of characters, return
        if (lowerCase || upperCase || numbers || specialChar) {
          return getRandom(lowerCase, upperCase, numbers, specialChar, pwdLength);
        }
    }
}

// Function for getting a random element from an array
function getRandom(lowerCase, upperCase, numbers, specialChar, pwdLength) {
  
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