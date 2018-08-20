function maxOfThree(a, b, c) {
    var max = 0;
    if(a >= b && a > c) {
        max= a;
    } else if(b >= a && b > c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}
console.log(maxOfThree(7, 7, 4));