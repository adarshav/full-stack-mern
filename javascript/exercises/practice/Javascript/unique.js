/*
 Write a JavaScript function to find the unique elements from two arrays. 

Test Data :
1. difference([1, 2, 3], [100, 2, 1, 10]);
return ["1", "2", "3", "10", "100"]

2. difference([1, 2, 3], [100, 2, 1, 10]); 
return ["1", "2", "3", "10", "100"]
*/
function difference(a, b) {
    for(let i = 0;i < b.length;i++) {
        if(a.indexOf(b[i]) < 0) {
            a.push(b[i]);
        }
    }
    return a;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));