function fizzBuzz(number) {
if(number % 3 === 0 && number % 5 !== 0 && number % 15 !== 0) {
    return 'fizz';
} if(number % 5 === 0 && number % 3 !== 0 && number % 15 !== 0) {
        return 'Buzz';
    } 
    if(number % 15 === 0 && number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    if(number % 15 !== 0 && number % 3 !== 0 && number % 5 !== 0) {
        return '';
    }
}
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(11));