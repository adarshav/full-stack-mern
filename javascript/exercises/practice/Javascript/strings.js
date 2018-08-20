let name = 'adarsha';
let city = 'udupi';
let state = 'karnataka';
let country = 'india';
let sentence = 'make in india';
let sentence1 = 'make in karnataka';

console.log(name.length);//7
console.log(city.toUpperCase());
console.log(state.indexOf('nataka'));//returns the character position if its found if not found -1 will be returned
console.log(state.charAt(5));//returns  the position of the character mentioned
console.log(name.repeat(2));//returns the new string for the specified number of times or copies
//slicce method can be applied only on strings it cannot be applied on other datatypes
console.log(name.slice(1));
console.log(name.slice(0, 3));//returns 'ada';
console.log(name.substr(0, 3));
console.log(name.substring(0,3));


