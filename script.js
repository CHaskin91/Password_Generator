// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate Random Password Function
function generatePassword() {

    // Character Type Arrays
    var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", ".", ",", "?", ";", ":"];


    // Character Length Prompt/
    var length = prompt("How many characters would you like in your password? Must be between 8 and 128.");
}




// Character Type Prompt

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
