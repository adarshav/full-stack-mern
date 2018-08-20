function petNameGenerator(str) {
        console.log(`the name is ${str}`); 
        var a = str.slice(0, 3); 
        console.log(a);      
        for(var i = 0;i < vowels.length;i++) {
        if(vowels[i] == str[3 - 1]) {
            console.log(str.slice(0, 4));
            } 
            } 
            return 'welcome';
        }
        
var str = 'deepika';
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(petNameGenerator(str));
//console.log(str[3]);
//console.log(vowels[2]);