function reverseString(string) {
    var temp = '';
    if(string.length === 0 || string === undefined) {
        return 'string is empty';
    }
    for(var i = string.length - 1;i >= 0;i--) {
        temp = temp + string[i];
    }
    return temp;
}
console.log(reverseString('\'hello\''));
console.log(reverseString('\'Greetings 2 everyone in the hall who all gathered here !!\''));