const hash = require('./utils.js');
const fs = require('fs');//loading the module in nodejs
//fs is not defined if u write as it is because filesysytem in nodejs is a module and it is not imported or required in this file or folder
fs.writeFileSync('notes.txt', "This is Text file created by nodejs");
//if there is no file it will create and place the contents otherwise if the file is been created the content will b replaced
//it takes two parameters one name of the file, other is content of the file 

//Challenge: Append a msg to notes.txt
 
fs.appendFileSync('notes.txt', "   Iam Appending");

//Knowing to import our own files

// console.log(utils);
// console.log(name);
//importing function from other file
// const add = sum(3, 4);
// console.log(add);

const hashTag = hash('narendra modi');
console.log(hashTag);

fs.writeFileSync('notes.js', 'notes is here');