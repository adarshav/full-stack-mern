/*Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference */

function difference(num) {
    if(num > 13) {
        var b;
         b = num - 13;
       return Math.pow(b, 2)
        
    } else if(num < 13) {
        var a = num - 13;
        return a
    }   
}
console.log(difference(10));