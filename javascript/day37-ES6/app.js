const greeting = require('./greet.js');

console.log(greeting.hello());
console.log(greeting.goodAfternoon());
console.log(greeting.goodEvening());
console.log(greeting.description);


let {hello, goodAfternoon, goodEvening} = greeting;

console.log(hello());
