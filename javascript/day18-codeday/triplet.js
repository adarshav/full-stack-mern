/*Body:

You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1
*/
function triplet(numbers) {
    var resultedSort = [];
    numbers.forEach(function(value) {
        resultedSort.push(value);
    });
    //return resultedSort;
    resultedSort.sort(function sortNumber(a, b){  //basically numbers cannot be sorted and numbers and can be sorted using this type
        return a -b; //this is for ascending order and (b-a) for descending order   
    });
    var result = resultedSort[1];
    return numbers.indexOf(result);
    //return result;
    //return resultedSort;
}
var numbers = [2, 3, 1];
//var n = [5, 10, 14];
console.log(triplet(numbers));
//console.log(triplet(n));