function squareSum(numbers) {
    var result = [];
    var sum = 0;
    for(var i = 0;i < numbers.length;i++) {
        result.push(numbers[i] * numbers[i]);
        sum = sum + result[i];
    }
    // for(var i = 0;i < result.length;i++) {
    //     sum = 
    // }
    return sum;;
}
console.log(squareSum([1, 2, 2]));