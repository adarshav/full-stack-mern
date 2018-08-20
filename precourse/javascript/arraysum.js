/* 
write a function sumArray that takes an array of numbers and return the sum of positive numbers
*/
function arraySum(numbers) {
    if(numbers.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0;i < numbers.length;i++) {
            if(numbers[i] > 0) {
                    sum = sum + numbers[i];
            }
    }
    return sum;
}
var numbers = [12, 34, 1, 2, -6];
var n1 = [1, 2, 3, 4, -7];
var n2 = [];
console.log(arraySum(numbers));
console.log(arraySum(n1));
console.log(arraySum(n2));
/*
the following is about the datatype where there is new method called "typeof" which makes us to know what is the type that variable holds 
*/
var n = 'number';
var a = 100;
var b = 100.002;
var c = true;
console.log(typeof n);
console.log(typeof b);
console.log(typeof c);console.log(typeof a);
