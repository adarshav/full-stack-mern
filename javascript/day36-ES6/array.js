//array destructuring
let fruits = ['apple', 'mango', 'banana'];
[f1, f2, f3] = fruits;//new feature of ES6 javascript array destructuring 
console.log(f1);
console.log(f2);
console.log(f3);
console.log('---------------------------------------------');
[f1, f2] = fruits
console.log(f1);
console.log(f2);
//use case
function oddEven(numbers) {
    let result = [[],[]];
    numbers.forEach(function(number) {
        if(number % 2 === 0) {
            result[0].push(number);
        } else{
            result[1].push(number);
        }
    });
    return result;
}
function findSum(numbers) {
    let sum = 0;
    numbers.forEach(function(n) {
        sum  = sum + n;
    });
    return sum;
}

let [evens, odds] = oddEven([10, 15, 20, 25]);
console.log(evens);
console.log('sum is' );
console.log(odds);