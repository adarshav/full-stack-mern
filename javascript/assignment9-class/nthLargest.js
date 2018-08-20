/*
Write a JavaScript function to get nth largest element from an unsorted array. 

Test Data :
1. nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
return 89

2. nthlargest([10,5,20,25],2);
return 20
*/
class Largest {
    constructor(array, element) {
        this.array = array;
        this.element = element;
    }
    sort() {
        let result = this.array.sort(function(a, b) {
                    return a-b;
        });
    return result[this.element];
    }
}



function nthLargest(a,b){
if(a.length === 0) {
         return 'invalid input';
     } else if(b < 0) {
                         return 'invalid input';
                         }
    let l1 = new Largest(a, b); 
    return l1.sort();
}