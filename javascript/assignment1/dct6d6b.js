function vowelCount(str) {
    let count = 0;
    for(let i = 0;i < string.length;i++) {
        if(vowels[i] == string) {
            count++;
        }
    }
    /*string.forEach(function(n) {
        console.log(n);
    
        if(n == vowels()) {
            console.log(vowels);
            count++;
        } 
    });*/     
   
    return count;
}
const vowels = 'aeiou';
const string = 'good morning';
console.log(vowelCount(string));
console.log(string.length);
//console.log(vowels);