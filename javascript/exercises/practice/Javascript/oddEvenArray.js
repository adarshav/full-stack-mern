//function should return sum even numbers and count of odd numbers
var num = [11, 20, 39, 45, 50, 60];
function sumCount(num) {
   var count = 0;
    var evenSum = 0
    for(let i = 0;i < num.length;i++) {
        if(num[i] % 2 === 0) {
            evenSum = evenSum + num[i];
        } else {
            count = count+1;
        }
    }
    return [evenSum, count];
} 
console.log(sumCount(num));