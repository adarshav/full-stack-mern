function unCapitalizeWords(str) {
    var words = str.split(' ');
    //console.log(words);
    var result = [];
    for(var i = 0;i < words.length;i++) {
        result.push(words[i].charAt(0).toLowerCase() + words[i].slice(1));
    }
    return result.join(' ');
} 
console.log(unCapitalizeWords('Js String Exercises'));