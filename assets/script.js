// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added Variables for password criteria
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = [0,1,2,3,4,5,6,7,8,9,];
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

// Function to receive prompts for criteria
function passPrompt() {
    var passLength = parseInt(prompt("How many characters should the new password contain?"));
// Password length alerts
    if (passLength < 8) {
        alert("The password must contain at least 8 characters to satisify security requirements!");
        return;
    }
    if (passLength > 128) {
        alert("The password must contain less than 128 characters!");
        return;
    }
// Variables for prompt options
    var includeUpperCase = confirm("Password should include uppercase letters?");
    var includeLowerCase = confirm("Password should include lowercase letters?");
    var includeNumeric = confirm("Password should include numbers?");
    var includeSpecialChar = confirm("Password should include special characters?");
// If confirm not selected on all options
    if (!includeUpperCase && !includeLowerCase && !includeNumeric && !includeSpecialChar) {
        alert("Your password must contain at leat 1 uppercase, lowercase, number, and special character to satisfy security requirements");
        return;
    }
// Var object to use in writePassword function
    var promptOptions = {
        passLength: passLength,
        upperCase: includeUpperCase,
        lowerCase: includeLowerCase,
        numeric: includeNumeric,
        specialChar: includeSpecialChar,
    }
    return promptOptions;
}

// Write password to the #password input
function writePassword() {
// Run prompt and log the answers
    var promptOptions = passPrompt();
    console.log(promptOptions)

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);