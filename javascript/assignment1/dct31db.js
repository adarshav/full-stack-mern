function convertor(number) {
    let celcius;
    celcius = (number - 32) * (5/9);
    return celcius;
}
console.log(Math.round(convertor(45)));
console.log(convertor(76));
