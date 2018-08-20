function arrayValues(a, b, c) {
    var result = [];
    var result1 = [];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if(typeof(a) === 'string' && typeof(b) === 'string') {
        for(var i = 0;i < value.length;i = i + c) {
            //console.log(value[i]);
            result.push(value[i]);
        }
        return result;
    } else {
        for(var j= 0; j < numbers.length;j = j + c) {
            result1.push(numbers[i]);
        }
        return result1;
    }
    var value = ['a,', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    //return result;
}
console.log(arrayValues('a', 'z', 2));
console.log(arrayValues('1', '9', 2));