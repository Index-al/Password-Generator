// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function generatePassword() {
  // Welcome the user and explain how to use the password generator
  alert("Welcome to the password generator! Please answer the following questions to generate your password. If prompted for a yes or no answer, click OK for yes and Cancel for no. Click OK to begin!");

  // Reset options
  possibleChars = [];
  passwordLength = null;

  // Prompt the user for password length
  passwordLength = prompt("Enter your password length (8-128 characters): ");

  while (passwordLength === null || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    if (passwordLength === null) {
      // Close the dialog box if the user clicks cancel
      break;
    }
    passwordLength = prompt("Invalid input. Enter a number between 8 and 128: ");
  }

  // If the user enters a valid number, log it to the console
  if (passwordLength !== null) {
    console.log("Valid input:", passwordLength);
  } else {
    console.log("Prompt canceled or closed.");
    return; // Exit the function if the user cancels or closes the prompt
  }

  // Prompt the user for lowercase letters in the password
  let lowercase = confirm("Would you like lowercase letters in your password?");
  if (lowercase) {
    possibleChars = possibleChars.concat("abcdefghijkmnopqrstuvwxyz".split(""));
  }

  // Prompt the user for uppercase letters in the password
  let uppercase = confirm("Would you like uppercase letters in your password?");
  if (uppercase) {
    possibleChars = possibleChars.concat("ABCDEFGHJKLMNPQRSTUVWXYZ".split(""));
  }

  // Prompt the user for numbers in the password
  let numbers = confirm("Would you like numbers in your password?");
  if (numbers) {
    possibleChars = possibleChars.concat("0123456789".split(""));
  }

  // Prompt the user for special characters in the password
  let special = confirm("Would you like special characters in your password?");
  if (special) {
    possibleChars = possibleChars.concat("!@#$%^&*()_+-=[]{};':\",./<>?".split(""));
  }

  // Check if at least one option is selected
  if (possibleChars.length === 0) {
    alert("Please select at least one option (lowercase, uppercase, numbers, or special characters).");
    return;
  }

  // Create an empty string to store the password
  var password = "";

  // Loop through the array of possible characters
  for (var i = 0; i < passwordLength; i++) {
    // Generate a random number between 0 and the length of the array
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    // Add the character at the random index to the password string
    password += possibleChars[randomIndex];
  }

  // Return the password string
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);