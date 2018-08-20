function testUpperCase(str, index) {
    //var character = 2;
    if(str.charAt(index) == str.charAt(index).toUpperCase()) {
        return 'uppercase is true';
    }
    if(str.charAt(index) == str.charAt(index).toLowerCase()) {
        return 'lowercase is true';
    }
}
console.log(testUpperCase('stRinG', 3));