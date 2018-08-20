function fakeBinary(num) {
    var result = '';
 num.split('').forEach(function(value) {
    if(value  < 5) {
        result = result + 0;
    } else {
        result = result + 1;
    }
 });
 return result;
}
var num = "3457"
console.log(fakeBinary(num));