var n1 = 10;
var n2 = 20;

function someFunction(n1, n2) {
console.log(n1);
console.log(n2);
console.log(arguments);
console.log(typeof arguments);
console.log(Object.keys(arguments));
console.log(arguments.length);//it is an associative array
//a real object does not  have length and this results the length and this is not an array too it is just a type of an array 

}
someFunction(n1, n2, 'a', 'b')