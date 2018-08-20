function countUpThenDown(number) {
    let result = [];
    for(let i = 0;i < number;i++) {
        result.push(i);
    }
    for(let i = number; i >= 0;i--) {
        result.push(i);
    }
    return result;
}
console.log(countUpThenDown(4));