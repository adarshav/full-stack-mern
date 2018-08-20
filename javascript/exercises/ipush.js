function iPush(array, element) {
    array[array.length] = element;
    return array;
}
console.log(iPush([1, 2, 3, 4], 5));