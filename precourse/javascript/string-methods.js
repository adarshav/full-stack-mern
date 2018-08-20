var first = 'adarsha';
console.log(first.toUpperCase());
var middle = 'V';
console.log(middle.toLowerCase());
var last = 'navada';
console.log(last.toUpperCase());
console.log('welcome to the new world \t' + first + middle + last);
console.log('welcome to the new world \t' + first.toUpperCase() + middle.toLowerCase() + last.toUpperCase());
console.log(last.length);
console.log(first.slice(0, 3)); // slice is a method which cuts sentence or information and the arguments that is passed are from where should bee sliced to until 
console.log(first.slice(4, 7));
var array = 'why, how, what';
console.log(array.split(', ')); //split alaways returns an array type parameters that should be passed are : delimitters i.e (comma, space, etc what is mentioned)
var a = 'a-b-n-q';
console.log(a.split('-'));
