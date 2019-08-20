// const hash = require('./utils.js');

// const adding = require('./notes.js');
//whatever u give the variable name it should be relevant 

const gettingNotes = require('./notes');
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

// let sum = adding(3,4);
// console.log(sum);

// var msg = gettingNotes();
// console.log(msg);
// fs.writeFileSync('notes.js', 'notes is here');

/*
    node -v [let us to know about the current version of node in system]
    npm -v [this command makes the programmer to know about the version npm modules in current system]
    npm init [this does nothing fancy this helps us to manage all the dependencies of npm package] then u get the package.json file will be in json format 

    node_modules is a folder which is maintained by npm it holds all the packages installed in the project

    if node_modules folder got accidentaly deleted the npm libraries does not work then no worry just type in command line npm install, the npm refers to the package-lock.json file look into the dependencies and install it so that u need not install the library from starting
*/
//requiring a npm package - validator
// const validator = require('validator');

// console.log(validator.isEmail("957@gmail.com"));

//challenge
/*
    use CHALK npm library to color the font in cli
*/
// const chalk = require('chalk');
// console.log(chalk.green('Sucess ....'));
// console.log(chalk.blue('Hello') + ' World ' + chalk.red('How r u '));
// console.log(chalk.green(
//     "Iam a green line " + 
//     chalk.blue.underline.bold('with a blue substring ') + 
//     'which becomes green again'
// ))

/*nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.
*/

// console.log(process.argv[2]);
//process is a big object where argv is a argument vector which states the argument an array type
// var name = process.argv[2];
// if(name === 'deeksha') {
//     console.log('U r the only 1 in my life');
// }else {
//     console.log('it is a shit');
// }
// console.log(process.argv);
//requiring yargs library
const yargs = require('yargs');
//yargs library is used to simplify the command line arguments

//we can add remove list 
yargs.command({
    command:'add',
    describe:'Adds the note',
    handler:function() {
        console.log('Adding a note');
    }
})

yargs.command({
    command:'remove',
    describe:'removes',
    builder:{
        title:{
            describe:'Adding note', 
            demandOption:true,
            type:String
        }
    },
    handler:function(argv) {
        console.log('Title: ' + argv.title);
    }
})

//challenge
//in builder we can put title, body and whatever we wish 

yargs.command({
    command:'List',
    describe:'lists up',
    builder:{
        body:{
            //optional
            describe:'listing',
            //it shows error when body is not mentioned in cli
            demandOption:true,
            //v are enforcing dat it should b in string
            type:String
        }
    }, 
    handler:function(argv) {
        console.log("Body: " + argv.body);
    }
})
//it should be at the bottom 
console.log(yargs.argv);

//yargs.command is used to perform operaions and also customize it, it takes three arguments COMMAND, DESCRIBE, HANDLER
//command tells us to add which is the command need to be done
//describe is optional but its a good practice to write about it , what are you doing
//handler it tells what should be done the function of the command