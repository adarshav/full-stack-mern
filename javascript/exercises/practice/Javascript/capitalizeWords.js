function capitalizeWords(name) {
    let splitted = name.split(' ');
    let result = [];
    //console.log(splitted);
    splitted.forEach((value) => {
        result.push(value.charAt(0).toUpperCase() + value.slice(1));
    });
    return result.join(' ');
}
console.log(capitalizeWords('make in india'));
console.log(capitalizeWords('make in karnataka'));
