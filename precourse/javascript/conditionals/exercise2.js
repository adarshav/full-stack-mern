function sumCount(a) {
    var sum = 0 , count = 0;
    for(var i = 0;i < array.length;i++) {
        if(array[i] > 0) {
            sum = sum + array[i];
           return sum;
        }
        else {
                return count ++;
        }
    }
    array.forEach(function(num) {
        if(num > 0) {
            sum = sum + num;//sum +=num
        }
        else {
            count++;
        }
    });
        return [sum, count];
}

var array = [1, 3, 4, -9, 2, -4];
console.log(sumCount(array));