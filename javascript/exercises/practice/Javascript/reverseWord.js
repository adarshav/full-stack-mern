// var str = 'i loke this program very much'
//reverseWord(str);
//return 'much very program this like i'
function reverseWord(str) {
    let result = str.split(' ');
    return result.reverse(' ').join('.');
    
}
console.log(reverseWord('i like this program very much'));