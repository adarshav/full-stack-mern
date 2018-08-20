/*
Missing number in an array 
given an array of size n-1 and given that there are numbers from 1 to n with one missing number is to be found
input [1, 2, 3, 5];
*/
function missingNumber(array) {
    for(let i = 0;i < array.length-1;i++) {
        if(array[i + 1] - array[i] !== 1) {
            return array[i]+1;
        }
    }
}
console.log(missingNumber([1, 2, 3, 5]));
console.log(missingNumber([1, 2, 3, 4, 5, 7]));
