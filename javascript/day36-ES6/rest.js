let fruits = ['apple', 'mango', 'jackfruit', 'banana'];

//es6
let [fruit1, fruit2, ...rest] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(rest);//rest returns an array type
//it need not be rest it can be any variables but those 3dots are necessary
//in those array type we can perform array operations
console.log('---------------------------------------');
let [a, , ...remaining] = fruits;
console.log(remaining);//here the mango is skipped
console.log(a);

