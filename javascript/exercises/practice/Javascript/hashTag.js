function hashTagGenerator(name) {
    let result = name.split(' ');
    let total = '#';
    result.forEach((value) => {
        total = total + value.charAt(0).toUpperCase() + value.slice(1);
    });
    return total;
}
console.log(hashTagGenerator('make in india'));
console.log(hashTagGenerator('swachh bharath'));
