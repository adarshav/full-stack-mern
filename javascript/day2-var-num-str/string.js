var firstName = 'adarsha';
var city = 'Bangalore';
var state = 'KArNAtaka';
var password = 'secret 123';
var sentence = 'Make In India , make in mysore';
console.log(password.length);
console.log(firstName.toUpperCase());
console.log(sentence.indexOf('usa'));
console.log(sentence.indexOf('make'));
console.log(firstName.charAt(3));
console.log(sentence.indexOf('in'));
console.log(city.lastIndexOf('ore'));
console.log('hi'.repeat(4));
//
console.log(firstName.slice(0, 3));//prints until 3 and not 3
console.log(firstName.slice(2));
console.log(firstName.substr(1, 3));
console.log(firstName.replace('ada', 'bad'));
var phoneNumber = '1234567890';
console.log(`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}- ${phoneNumber.slice(6)}`);