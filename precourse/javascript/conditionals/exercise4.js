function makeEven(numbers) {
    var sum = 0;
    numbers.forEach(function(n) {
        sum = sum + n;
    });
        if(sum % 2 === 0) {
            return 2;
        } else {
            return 1;
        }
    return;
}
var numbers1 = [1, 2, 3, 4, 5];
console.log(makeEven(numbers1));