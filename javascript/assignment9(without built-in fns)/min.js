function min(array) {
   let minimum = array[0];
    for(i = 1;i< array.length;i++) {
        if(array[i] < minimum) {
            minimum = array[i];
        }
    }
    return minimum;
}
console.log(min([5, 1, 4, 7 ,2, -1]));