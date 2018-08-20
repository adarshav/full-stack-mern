function countUpThenDown(num) {
    let number = [];
    for(let i = 0;i < num;i++) {
        number.push(i);
    }
    for(let j = num;j >= 0;j--) {
        number.push(j);
    }
    return number;
}
console.log(countUpThenDown(4));