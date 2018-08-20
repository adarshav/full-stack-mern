function testUpperCase(name, index) {
    let value = name.charAt(index).toUpperCase();
    let value1 = name.charAt(index).toLowerCase();

    if(name.charAt(index) === value) {
        return 'uppercase is true';
    } else if(name.charAt(index) === value1) {
        return 'lowercase is true';
    }
}
console.log(testUpperCase('adarsha', 4));