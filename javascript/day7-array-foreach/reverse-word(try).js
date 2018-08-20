function reverseWords(str) {
    var words;
    words = str.split('.');
    words.reverse();
    return words.join('.');
}
var str = 'i.like.this.program.very.much';
console.log(reverseWords(str));
console.log(reverseWords('i.like.this.program.very.much'));
