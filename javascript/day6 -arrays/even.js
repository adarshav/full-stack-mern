function findEvensCount(numbers) {
    var count = 0;
    for(var i = 0;i < numbers.length;i++) {
        if(numbers[i] % 2 == 0) {
            count ++;
        }
    }// never return in for loop
    return count;   
}
var numbers = [10, 15, 20, 25, 30, 35];
console.log(findEvensCount(numbers));//this function returning 3

function findEvens() { //this is  imperative statement
    var evens = [];
    for(var i= 0;i < numbers.length;i++) {
        if(numbers[i] % 2 == 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}
console.log(findEvens(numbers)); // this function will return  [10, 20, 30]

function isElePresent(numbers, element) {
    var isFound = false;
    for(var i = 0;i < numbers.length;i++){
        numbers.indexOf(element)
           isFound = true;

    }
    return isFound;
}
console.log(isElePresent(numbers, 25));