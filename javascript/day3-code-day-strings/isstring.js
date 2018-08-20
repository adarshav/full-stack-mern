function isString(string) {
    if(typeof(string) === 'string') {
        return true;
    } else {
        return false
    }
}
console.log(isString('w3 resource'));
console.log(isString([1, 2, 3]));