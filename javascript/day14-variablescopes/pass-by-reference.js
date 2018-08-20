//whenever we pass an argument of object type(arrays, object, date) it will refer variables defined in the global scope
var numbers = [10];
var person = {
    name:'ani'
}
function changeNumber() {
    numbers[0] = 100;
    console.log('inside function',numbers );
}
function changePerson(tutor) {
tutor.name = 'anirudha';
console.log('inside function', tutor);
}
console.log('before calling function', numbers);
changeNumber(numbers);
console.log('after calling function', person);
changePerson(person);
console.log('after calling & outside function', person);
