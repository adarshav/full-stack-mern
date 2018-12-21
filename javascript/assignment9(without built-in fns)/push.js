function push(array, element) {
    array[array.length] = element;
    return array.length;
}
console.log(push([1, 2, 3], 10));