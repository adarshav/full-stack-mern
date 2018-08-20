//es5
var fruits = ['apple', 'banana', 'guava'];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//es6
fruits.forEach((fruit) => {//this is good than others
    console.log(fruit);
});
//incase of only one arg to the function eliminate rond brackets
fruits.forEach(fruit => {
    console.log(fruit);
});
//incase of only statement to be executed inside the function, eleiminate the flower brackets
fruits.forEach(fruit => console.log(fruit));

 let numbers = [10, 20, 30, 40, 50];
// let result = numbers.filter(function(n) {
//     return n > 25
// });
// console.log(result);//es5 method

let result = numbers.filter(n => n > 25);
console.log(result);

//Arrow functions 

