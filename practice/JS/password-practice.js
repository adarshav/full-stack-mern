/*
Create a function, authenticate, which takes an array and a string as it's input.

The array will be an array of strings representing a list of passwords! The string is a password. If the password input matches one of the passwords in the array, return the string 'authenticated', otherwise return 'not authenticated' */

function authenticate(passwords, str) {
    for(var i = 0;i < passwords.length;i++) {
        if(passwords[i] == str) {
            console.log(passwords[i]);
            return 'authenticated';
        } else {
            return 'not authenticated';
            }
    }
    return 'welcome'
}
var passwords = ['qwerty', 'adarsha', 'bangara'];
var strings = 'bangara';
console.log(authenticate(passwords, 'adarsha'))