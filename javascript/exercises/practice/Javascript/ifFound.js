function isEleFound(numbers, element) {
    let isFound = false;
    let result = numbers.indexOf(element);
    if(result > 0) {
        isFound = true;
    } else{
        isFound = false;
    }
    return isFound;
}
console.log(isEleFound([10, 34, 41], 23));
console.log(isEleFound([10, 34, 41], 34));
