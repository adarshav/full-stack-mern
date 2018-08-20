function isToUpperCase(name, number) {
    let result = name.charAt(number).toUpperCase();
    //console.log(result);
    if(name.charAt(number) === result){
        return 'it is upperCase';
    } else {
        return 'it is lowerCase';
    }
}
console.log(isToUpperCase('adarSha', 3));