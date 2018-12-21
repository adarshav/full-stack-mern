function max(array) {
    let max = 0;
    for(i=0;i<array.length;i++) {
        if(max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
console.log(max([5, 1, 4, 7, 1, 2])); // 7
console.log(max([3, 4, 12, 1, 8])); // 12
console.log(max([-1, 6, 3, 2.2, -10, -4])); // 6