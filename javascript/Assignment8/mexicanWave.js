function mexicanWave(word) {
    let alpha = word.split('');
    let upper, total, result = [];
    for(var i = 0;i < alpha.length;i++) {
        upper = alpha[i].toUpperCase() + alpha.slice(i+1, alpha.length).join('');
        //console.log(upper);
        total = alpha.slice(0, i).join('');
        //console.log(total);
        result.push(total+upper);
        //console.log(result);
    }

    return result;
}
console.log(mexicanWave('hello'));
console.log(mexicanWave('gap'));
