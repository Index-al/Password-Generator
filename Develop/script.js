// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create an array to store possible characters
var possibleChars = [];
var passwordLength = 0;

// << LOGIC >>
// When the user clicks on the button, ask a series of questions
// First question: Enter a # between 8 and 128

// Second question: Y/N Do you want lowercase letters in your password?

// Third question: Y/N Do you want uppercase letters in your password?

// Fourth question: Y/N Do you want numbers in your password?

// Fifth question: Y/N Do you want special characters in your password?

// If the user does not select at least one character type, tell them to choose at least 1

// After all questions have been answered, generate a password matching the selected criteria

// OPTIONAL: Validate the password matches the selected criteria

// Then display the generated password on the page
// << END LOGIC >>

generateBtn.addEventListener("click", function () {
alert("Welcome to the password generator! Please answer the following questions to generate your password. If prompted for a yes or no answer, click OK for yes and Cancel for no. Click OK to begin!");

// Prompt the user for password length
let passwordLength = prompt("Enter your password length (8-128 characters): ");

while (passwordLength === null || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  if (passwordLength === null) {
    // Close the dialog box if user clicks cancel
    break;
  }
  passwordLength = prompt("Invalid input. Enter a number between 8 and 128: ");
}
  // If the user enters a valid number, log it to the console and return it
  if (passwordLength !== null) {
    console.log("Valid input:", passwordLength);
    return passwordLength;
  } else {
    console.log("Prompt canceled or closed.");
  }
});

// Prompt the user for lowercase letters in password
generateBtn.addEventListener("click", function () {
  let lowercase = confirm("Would you like lowercase letters in your password?");
  // If the user selects lowercase letters, add them to the array
  if (lowercase) {
    possibleChars = possibleChars.concat("abcdefghijkmnopqrstuvwxyz".split("")); // Ambiguous characters removed
  }
  console.log("lowercase:", lowercase);
  return lowercase;
});

// Prompt the user for uppercase letters in password
generateBtn.addEventListener("click", function () {
  let uppercase = confirm("Would you like uppercase letters in your password?");
  // If the user selects uppercase letters, add them to the array
  if (uppercase) {
    possibleChars = possibleChars.concat("ABCDEFGHJKLMNPQRSTUVWXYZ".split("")); // Ambiguous characters removed
  }
  console.log("uppercase:", uppercase);
  return uppercase;
});

// Prompt the user for numbers in password
generateBtn.addEventListener("click", function () {
  let numbers = confirm("Would you like numbers in your password?");
  // If the user selects numbers, add them to the array
  if (numbers) {
    possibleChars = possibleChars.concat("0123456789".split(""));
  }
  console.log("numbers:", numbers);
  return numbers;
});

// Prompt the user for special characters in password
generateBtn.addEventListener("click", function () {
  let special = confirm("Would you like special characters in your password?");
  // If the user selects special characters, add them to the array
  if (special) {
    possibleChars = possibleChars.concat("!@#$%^&*()_+-=[]{};':\",./<>?".split(""));
  }
  console.log("special:", special);
  return special;
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
