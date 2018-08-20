var person = {
    firstName : 'Adarsha',
    city :'bangalore',
    details : function() {
        return 'welcome to ' +this.city +' MR ' + this.firstName; 
    }
}
console.log('Iam ' +person.firstName + 'and i live in ' + person.city);
console.log(Object.keys(person));//this method returns the items in key
console.log(person.details());
console.log(Object.values(person));
for(var key in person) {
    console.log(key, person[key]);//while iterating the for in loop for object we cannot use Dot operator and we have to use of array type
}
console.log(Object.keys(person).includes('state'));
console.log(Object.keys(person).includes('city'));
console.log(Object.values(person).includes('Bangalore'));