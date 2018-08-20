/*
Test Data
first([7, 9, 0, -2]) ; // returns 7 
first([],3); // returns []
first([7, 9, 0, -2],3); // returns [7, 9, 0] 
first([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
first([7, 9, 0, -2],-3); returns [7,9,0,-2]
*/
class First {
    constructor(array, element) {
        this.array = array;
        this.element = element;
    }
    find() {
        let result = this.array.slice(0, this.element);
        if(this.element < 0) {
                 return this.array.slice(0);
             } else if(this.element === undefined) {
                            return this.array[0];				 
                 } else {
                    return result;
                }
    }
}


function firstElements(a,b){
let c1 = new First(a, b);
return c1.find();
}