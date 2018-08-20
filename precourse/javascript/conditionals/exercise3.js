function arithmetic(a, b, operator) {
 if(operator ==='add') {
    return a + b;
 }  else if(operator ==='subtract') {
      return a - b;
 } else if(operator ==='multiply') {
    return a * b;
 } else if(operator ==='divide') {
    return a / b;
 } else {
     return'no operator found';
 }
}
console.log(arithmetic(5, 2, 'add'));
