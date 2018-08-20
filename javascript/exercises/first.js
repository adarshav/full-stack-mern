/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] */
// THIS PROGRAM HAS EXECUTED
function first(array, num) {
    if(num = 0 || num == undefined) {
        return array.slice(0, 1);
    } else if(num < 0) {
        return [];
    } else {
        return array.slice(0, num);
    }
    return 'hiiiii';
}
var num = 3;
var array = [7, 9, 0, -2];
console.log(first(array, num));
var string = 'adarsha v navada';
var str = ['red', 'green', 'blue', 'white'];
console.log(str);
//console.log(str.split(' '));
console.log(string.split('+'));
