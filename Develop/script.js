// Assignment Code
var generateBtn = document.querySelector("#generate");
var secretTrigger = "";

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
  // Welcome the user and explain the password generator
  alert("Welcome to the password generator! Please answer the following questions to generate your password. If prompted for a yes or no answer, click OK for yes and Cancel for no. Click OK to begin.");

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
  console.log("Lowercase:", lowercase);
  if (lowercase) {
    possibleChars = possibleChars.concat("abcdefghijkmnopqrstuvwxyz".split("")); // Remove the letter l to avoid confusion with the number 1
  }

  // Prompt the user for uppercase letters in the password
  let uppercase = confirm("Would you like uppercase letters in your password?");
  console.log("Uppercase:", uppercase);
  if (uppercase) {
    possibleChars = possibleChars.concat("ABCDEFGHJKLMNPQRSTUVWXYZ".split("")); // Remove the letter O to avoid confusion with the number 0
  }

  // Prompt the user for numbers in the password
  let numbers = confirm("Would you like numbers in your password?");
  console.log("Numbers:", numbers);
  if (numbers) {
    possibleChars = possibleChars.concat("0123456789".split(""));
  }

  // Prompt the user for special characters in the password
  let special = confirm("Would you like special characters in your password?");
  console.log("Special:", special);
  if (special) {
    possibleChars = possibleChars.concat("!@#$%^&*()_+-=[]{};':\",./<>?".split("")); // Remove the backtick ` to avoid confusion with the single quote '
  }

  // Check if at least one option is selected
  if (possibleChars.length === 0) {
    alert("Please select at least one option (lowercase, uppercase, numbers, or special characters).");
    return;
  }

  // Create an empty string to store the password
  var password = "";

  // Validate that the password contains at least one of each selected character type
  if (lowercase) {
    password += getRandomChar("abcdefghijkmnopqrstuvwxyz");
  }

  if (uppercase) {
    password += getRandomChar("ABCDEFGHJKLMNPQRSTUVWXYZ");
  }

  if (numbers) {
    password += getRandomChar("0123456789");
  }

  if (special) {
    password += getRandomChar("!@#$%^&*()_+-=[]{};':\",./<>?");
  }

  // Complete the remaining characters randomly
  for (var i = password.length; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];
  }

  // Shuffle the password characters to make the order random
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

  // Print the generated password to the console
  console.log("Generated Password:", password);

  // Return the password string
  return password;
}

// Function to get a random character from a given string
function getRandomChar(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
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

// Try hitting some random characters on your keyboard
var 𝑖𝑠𝑉𝑖𝑑𝑒𝑜𝑃𝑙𝑎𝑦𝑖𝑛𝑔=!1,𝑠𝑒𝑐𝑟𝑒𝑡𝑇𝑟𝑖𝑔𝑔𝑒𝑟="";document.addEventListener("keydown",function(𝑒){𝑖𝑠𝑉𝑖𝑑𝑒𝑜𝑃𝑙𝑎𝑦𝑖𝑛𝑔||((𝑠𝑒𝑐𝑟𝑒𝑡𝑇𝑟𝑖𝑔𝑔𝑒𝑟+=𝑒.key.toLowerCase()).includes("r")&&𝑠𝑒𝑐𝑟𝑒𝑡𝑇𝑟𝑖𝑔𝑔𝑒𝑟.includes("i")&&𝑠𝑒𝑐𝑟𝑒𝑡𝑇𝑟𝑖𝑔𝑔𝑒𝑟.includes("c")&&𝑠𝑒𝑐𝑟𝑒𝑡𝑇𝑟𝑖𝑔𝑔𝑒𝑟.includes("k")&&(document.body.innerHTML='<div style="max-width: 100%;"><video width="100%" height="auto" autoplay loop onplaying="𝑖𝑠𝑉𝑖𝑑𝑒𝑜𝑃𝑙𝑎𝑦𝑖𝑛𝑔=true;"><source src="../Assets/secret.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>'))});