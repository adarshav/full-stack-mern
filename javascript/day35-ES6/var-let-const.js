function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0;i < str.length;i++) {
        if(vowels.includes(str[i])) {
            count ++;
        }
    }
    return count;
}
console.log(countVowels('hello'));

//instead of var, let and const can be used as the name suggests const keyword is used to declare constants Ex:Math.pi, const name = 'adarsha' if you again try to reassign the const variable it does not allow it whereas 'let' keyword is block scope and var keyword is function scope but let can be reassigned
var n1 = 10;
var n2 = 100;
if(n1 === n2) {
    let name ='numbers are not equal';
}
console.log(n1, n2);
//console.log(name);//reference error name is not defined 

let players = ['sachin', 'dhoni', 'virat'];
function listPlayers() {
    for(var i = 0;i < players.length;i++) {
        console.log(players[i]);
    }
    console.log(i);
}
listPlayers();
//console.log(i);// reference Error i is not defined
console.log('---------------------------------------------------');
function displayPlayers() {
    for(let j = 0;j < players.length;j++) {
        console.log(players[j]);
    }
    //console.log(j);//reference Error j is not defined
}
displayPlayers();

console.log('---------------------------------------------------');

(function() {//iife function
    var n1 = 10;
    if(n1 === 10) {
        var inString = 'ten';//if this inString variable is prefixed as let, it would not be executed in line number 46
    }
    console.log(n1);//10
    console.log(inString);//ten
})();
