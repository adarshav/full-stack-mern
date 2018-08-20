function missing(array) {
    for(var i = 0;i < array.length - 1;i++) {
        if(array[i + 1] - array[i] !== 1) {
            return array[i] + 1;
        }
    }
}
var array = [1, 2, 3, 4, 5, 7];
console.log(missing(array));///it returns 6
