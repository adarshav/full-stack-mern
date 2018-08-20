/*Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2 
Output : The sign is - */

function findSign(num) {
    var sum = 0;
    for(var i = 0;i < num.length;i++) {
        sum = sum + num[i];
    }
    if(sum > 0) {
        return `the sum is ${sum} and sign is +`;
    } else {
        return `the sum is ${sum} and sign is -`;
    }
}
var num = [9, -7, 2];
console.log(findSign(num));