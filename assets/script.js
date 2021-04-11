// Assignment Code
var generateBtn = document.querySelector("#generate");

// My variables
var passwordLength;
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumeric;

// Function to prompt password criteria
function passwordPrompt () {
    //numeric prompt
    passwordLength = parseInt(prompt("How many characters should the new password contain?"));
    //conditional logic for it has to be a number between 8 & 129
        if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
            alert("Password length must be 8 or more characters and less than 129!");
            return passwordPrompt();
        }
        else if (isNaN(passwordLength)) {
            alert("Password length must be a number!");
            return passwordPrompt();
        }
        else {
            confirmUpper = confirm("Password should include uppercase letters?");
            confirmLower = confirm("Password should include lowercase letters?");
            confirmSpecial = confirm("Password should include special characters?");
            confirmNumeric = confirm("Password should include numbers?");
        }
        //if one criteria isn't specified
        if (!confirmUpper && !confirmLower && !confirmNumeric && !confirmSpecial) {
            alert("Your password must contain at least 1 uppercase, lowercase, number, or special character to satisfy security requirements");
            return;
        }
        writePassword();
};

// Write password to the #password input
function writePassword() {
    //variables for randomizer thingy
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "!@#$%^&*()-_=+;:',<.>/?";
    var numeric = "0123456789";
    //new variable to throw true criteria into string
    var all = "";

    if (confirmLower) {
        all = all + lower;
    }
    if (confirmUpper) {
        all = all + upper;
    }
    if (confirmNumeric) {
        all = all + numeric;
    }
    if (confirmSpecial) {
        all = all + special;
    }
    // variable to generate password string
    var password = "";
    //for loop that takes the length from prompt and all other criteria then randomizes and adds them together in a string
    for (var i = 0; i < passwordLength; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    //this prints the string as the value in the box
    document.getElementById("password").value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompt);
