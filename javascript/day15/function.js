//function declaration
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));

//function expression 
var sum = function() {//we csn also pass arguments to it as the sme way
return 'im a function expression ';
}
console.log(sum);//it just refers the function and not invoking it
console.log(sum());

var arraySum = function(array) {
var sum = 0;
array.forEach(function(value) {
    sum = sum + value;
});
return sum;
}
console.log(arraySum([1, 2, 3, 4]));