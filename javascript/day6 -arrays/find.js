function findName(names, search) {
var present = names.find((name) => {
    return name === search;
});
return present;
}
var  names = ['ramesh', 'suresh', 'jaggesh', 'veeresh'];
console.log(findName(names, 'mahesh'));//it returns undefined
console.log(findName(names, 'veeresh'));//it returns veeresh
//find method returns the value of first element that pass the test and returns undefined and it will not traverse till the end of the loop (it returns the first element which occurs in array)
console.log('--------------------------------');

function findTimes(students, search) {
    var count = 0;
var result = students.filter(function(student) {
    return student === search;
});
    if(result.length == 0) {
        return `${search} is not in the list`;
    } else {    
        return `${search} has appeared ${result.length} time(s)`;
    }
}
var students = ['ravi', 'rakesh', 'pavan', 'pavan'];
console.log(findTimes(students,'pavan'));
console.log(findTimes(students,'gokul'));