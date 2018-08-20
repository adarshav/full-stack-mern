/*
Create a function, removeZeros, which strips out any zeros from a number, and returns the 'stripped' number.

So, what happens if the input is zero? That is a special case! If the input is zero, the function should return NaN, which stands for 'Not a Number'. NaN is a special value that isn't a number, but still is of type 'number'!

Examples

INPUT: removeZeros(1023002);
OUTPUT: 1232
INPUT: removeZeros(6006606.203);
OUTPUT: 6666.23
INPUT: removeZeros(0);
OUTPUT: NaN
*/
function removeZeroes(num) {
    var array = '';
    var numStr =
    for(var i = 0;i < num.length;i++) {
        if(num[i] !== '0') {
            array = array + num[i];
        }
    }
    return array;
    //console.log(num[1]);
}
console.log(removeZeroes('1023002'));