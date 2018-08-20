function onesZeroes(numbers) {
    var num = numbers.join('');
    result = parseInt(num, 2);
    return result;
}
console.log(onesZeroes([0, 0, 1, 1]));