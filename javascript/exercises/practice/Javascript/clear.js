function clearArray(array) {
    let result = [];
    for(let i = 0;i < array.length;i++) {
        if(array[i]) {
            result.push(array[i])
        }
    }
    return result;
}
console.log(clearArray([NaN, 0, 15, false, -22, '',undefined, 47, null]));