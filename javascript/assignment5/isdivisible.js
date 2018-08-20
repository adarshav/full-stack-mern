function isDivisible(a, b) {
    if(a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(9, 3));
console.log(isDivisible(9, 4));