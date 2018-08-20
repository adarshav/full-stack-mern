var str = 'js rb py';
console.log(str.split(' ')); //returns string to array
var names = ['ramesh', 'veeresh', 'ganesh', 'ramesh', 'suresh'];
console.log(names.slice(0, 2));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var a, b, c;
a = numbers.slice(0, 3);
b = numbers.slice(3, 6);
c = numbers.slice(6);
 console.log(`(${a.join(' ')}) ${b.join(' ')}-${c.join(' ')}`);//join always returns an array to string 
 var evens = [2, 4, 6];
 var odds = [3, 5, 7];
 var numbers = evens.concat(odds);
 console.log(numbers);
 var n1 = odds.concat(evens);
 console.log(n1);
 console.log(names.indexOf('ramesh'));
 //checking if names in array are equal
 if(names.indexOf('ramesh') ===names.lastIndexOf('ramesh')) {
     console.log('they are unique'); 
 } else {
     console.log('repeated');
 }
