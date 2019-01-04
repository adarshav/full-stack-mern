/*
Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.

Examples
INPUT: evenOdd([1,2,3,4,5,6]);
OUTPUT: [ [2,4,6], [1,3,5] ]
*/
function evenOdd(array) {
    for(var i = 0;i < array.length;i++) {
        if(array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
    return even, odd;
}
var even = [];
var odd = [];
console.log(evenOdd([1,2,3,4,5,6]));