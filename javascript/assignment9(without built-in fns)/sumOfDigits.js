function sumOfDigits(digit) {
    result = digit.toString(10).split("");
    //return result;
    var total = 0;
    result.forEach((value) => {
        //console.log(value);
        total = total + value;
    })
    return total;
}
console.log(sumOfDigits(414))