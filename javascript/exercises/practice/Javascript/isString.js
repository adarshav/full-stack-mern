function isString(name) {
    if(typeof(name) === 'string') {
        return true;
    } else {
        return false;
    }
}
console.log(isString('banglore'));
console.log(isString(123));
