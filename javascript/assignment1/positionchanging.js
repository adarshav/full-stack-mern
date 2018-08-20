function move(array, first, last) {
    var temp = array[first];//temp has stored 1
    if(first >= last) {
        return;
    } else{
        array[first] = array[last];
        array[last] = temp; 
        }
    return array;
    //return temp;
}
console.log(move([1, 2, 3, 5, 6], 0, 2));
console.log(move([10, 20, 30, 40, 50],0,2));