//An array is ordered, integer indexed, cllection of values
var players = [];
console.log(typeof players); //object
players = ['virat', 'dhoni', 'bumrah'];
console.log(Array.isArray(players)); //isArray is a method  which returns boolean value
console.log(players[0]);//accesing array eelements using their index
//when array is accessed using index it returns string and string methods can be used
console.log(players[1].toUpperCase());
//using array index we can also rename the value lies there
players[2] = 'rohit';
console.log(players[2]);
console.log(players);
//when array index value is given more in other programming languages it will return error where as in javascript it will return undefined (where it is also a datatype)
console.log(players[5]);
console.log(players.push('dhawan'));
console.log(players);
//last index will always be length - 1
//insert the element at last position without using push method
players[players.length] = 'raina';
console.log(players);
var numbers = [10, 20, 9, 4];
console.log(numbers.reverse());//[4, 9, 20, 10]
console.log(players.sort()); //all words should be lowercase, if a starting letter is capital it will be given high pririoty
// when  u sort an array it will be replaced in place of original array
var names = new Array(); //names = []
var names = new Array(2);
console.log(names.fill(12));
console.log(names);
var names = new Array(1, 'add');        
console.log(names);
console.log(players.pop());  //remove element at last position
console.log(players.shift());//removes element at first position
console.log(players);
console.log(players.unshift('klr'));
console.log(players);
console.log(players.splice(3, 0, 'rayudu'));
console.log(players);
console.log(players.splice(2, 1));
console.log(players);





