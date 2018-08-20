function convertFarenheit(num) {
    var a = (num - 32) * (5/9);
    return a;
}
function convertCelcius(num) {
    var b = num * (9/5) + 32;
    return b;
}
console.log(Math.round(convertCelcius(7)));
console.log(Math.ceil(convertFarenheit(45)));