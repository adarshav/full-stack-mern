//an object is unordered object/string indexed collection of values
var person = {
    //key :value
    firstName:'Adarsha',
    country:'India',
    details: function() {
        return 'if the the function is not returned I will kill u';
    }
}

console.log(person['firstName']);
console.log(person.country);
//here person is a object and 'firstName' and'country' stands as property
//object does not hold only key:value it also holds a function
console.log(person.details());//here the details will act as method hence it is enclosed in braces