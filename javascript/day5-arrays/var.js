var names = ['ganesh', 'suresh', 'veeresh'];
var a = ''//dont initialise variables inside loop which will reinitialse the values
for(var i = 0;i < names.length;i++) {
    var a = names[i]
    console.log(a);
}
var numbers = [10, 20, 30, 40, 50, 60];
var sum = 0;
for(var i = 0;i < numbers.length;i++) {
    sum = sum + numbers[i];
}
function evenIndex(num) {
    var sum = 0;
    for(var i = 0; i < num.length;i= i+ 2) {
        sum = sum + num[i];
    }
    return sum;
}
var num = [10, 20, 30, 40, 50, 60];
console.log(evenIndex(num));
//function should return sum even numbers and count of odd numbers
function sumCount(num) {
    var sum = 0, count = 0;
    for(var i = 0;i < num.length;i++) {
        if(num[i] % 2 == 0) {
            sum = sum + num[i];
        } else {
            count ++;
        }
    }
    return [sum, count];
}
var num = [10, 15, 20, 25, 30, 40];
console.log(sumCount(num));