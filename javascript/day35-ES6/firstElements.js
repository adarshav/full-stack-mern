function firstElements(a, b) {
    let result;
    result = a.slice(0, b);
    if(b === 'undefined') {
        console.log(a);
        return a.slice(0, 1);
    } else if(b < 0) {
        return a.slice(0);
    }
    return result;
}
console.log(firstElements([7, 9, 0, -2],3));
console.log(firstElements([7, 9, 0, -2]));
console.log(firstElements([7, 9, 0, -2],-3));

