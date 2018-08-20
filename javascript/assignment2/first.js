/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
*/
function first(a, b) {
    var result;
    result = a.slice(0, b);
    if(b < 0) {
        return a.slice(0, 1);
    } else if(b === undefined) {
        return[];
    }
    return result;
}
console.log(first([7, 9, 0, -2], 2));
console.log(first([7, 9, 0, -2], -3));
console.log(first([7, 9, 0, -2]));