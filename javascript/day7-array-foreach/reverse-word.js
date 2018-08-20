// var str = 'i loke this program very much'
//reverseWord(str);
//return 'much very program this like i'
function reverseWord(str) {
 var a = str.split('.');
 //return a;

  return a.reverse().join(' ');
 //return a.join('.');
}

console.log(reverseWord('i.like.this.program.very.much'));