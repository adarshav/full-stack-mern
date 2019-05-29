// console.log("Hello World !!!!");
// var firstName = 'adarsha';
// console.log(firstName);
// console.log(typeof(firstName));
// var age = 28;
// console.log(typeof(age));
// var job;
// console.log(typeof(job));
// /*
//     there 5 datatypes in javastring
//     String:it is known
//     number:same as above
//     boolean:it takes only two values either true or false
//     undefined:when the variable is declared and not initialised, the type of the variable will be undefined
//     null:the variable does not exist 
// */

// /*
// there are some good practices inn javascript i.e naming of variables should be meaningful and camelCase
//  */
// //variable mutation and type coercion
// /*
// when we want to concatenate two variables
// in the below piece of code the two variables are concatenated and this is known as type coercion, Javascript automatically converts the type what is required
// and now in the below code firstName is a string, space is a string and age is also converted to string
// */
// console.log(firstName +  " " + age);
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' ' + 'is a' + ' '+ age + 'years old' + 'job' + ' ' + job+ 'is he married' + ' ' + isMarried );
// //javascript converts boolean to string even undefined can be converted to string

// //************* */
// //varaible mutation
// //it means the value of variable can be changed 
// age = 'twenty three years old';
// console.log(age);
// //another method of printing and asking user input
// // var lastName = prompt("what is ur last Name??");
// // console.log('Hi' + ' ' + firstName + " "+ lastName + ' ' + 'welcome');

// //Operators precedence
// var x = y = (8 + 3) * 5 + 6 //11 * 5 + 6; 55 + 6; 61
// //first the value will be assigned y then to x because the precedence of assignment goes from left to right [FOR MORE DETAILS VISIT THE DOCUMENTATION OF JAVASCRIPT AND GO TO OPERATOR PRECEDENCE]
// console.log(x, y); //61 61

/*
************************************* */
//CODING CHALLENGE - 1
/*
Mark and john are trying to compare their BMI(Body Mass Index), which is calculate using the formula BMI = mass / height ^ 2
 */
// var markMass = 55;
// var  johnMass = 60;
// var markHeight = prompt("enter the Mark height in meters");
// var johnHeight = prompt("enter the height of john?? ");
// var markBmi = markMass / (markHeight * markHeight);
// var johnBmi = johnMass / (johnHeight * johnHeight);
// console.log(markBmi, johnBmi);
// var isHighest = (markBmi > johnBmi);
// console.log("Is Mark's BMI higher than John's" + ' ' + isHighest);

//if- else
// var name = 'adarsha';
// var civilStatus = 'single';
// if(civilStatus === 'married') {
//     console.log(name + ' ' + 'is married');
// } else { 
//     console.log(name + ' ' + 'will hopefully marry soon');
// }

//Boolean Logic
/*
    AND operator holds true if both values are true
    OR operator holds true if one of the values holds true
    NOT negates thee value
 */
// var age = 23;
// var name = 'adarsha';
// if(age <= 13) {
//     console.log(name + ' ' + 'is a boy');
// } else if(age >= 13 && age <= 20) {
//     console.log(name + ' is a teenager');
// } else if(age >=20 && age <= 30) {
//     console.log(name + ' is a young man');
// } else{
//     console.log(name + ' is a Man');
// }

//********************* */
//Ternary operator andSwith statements
// var age = 15;
// var name = 'adarsha';
// (age >= 18) ? console.log(name + ' can vote for the country') : console.log(name + ' has to wait for some more years');
// vote = (age >= 18) ? 'vote':'cannot vote';
// console.log( name + ' ' + vote);

//Swith statements
//it is another way addressing the if-else-if statements
// var name = 'adarsha';
// var job = 'actor';
// switch(job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(name + ' teaches about the untold story of indians who fought for the sake of country selflessely');
//         break;
//     case 'employee':
//         console.log(name + ' works in a prestigious company with more salary');
//         break;
//     case 'speaker':
//         console.log(name + 'speaks about the current issues faced by india');
//         break;
//     default:
//         console.log(name + ' does something else');
// }
//there is no rule that case condition should be a variable or another, it can be an condition too like the below code
// var age = 30;
// switch(true) {
//     case (age < 18):
//         console.log(name + ' is a boy');
//         break;
//     case (age >= 18 && age <= 25):
//         console.log(name + ' is teenager');
//         break;
//     case (age >=  25):
//         console.log(name + ' is a Man');
//         break;
//     default:
//         console.log(name + 'He is something else');
// }

//Truthy and falsy values
//falsy values are Undefined, null, NaN, 0, ''
//Other than falsy values are Truthy values
// var height;
// height = 23;
// if(height) {
//     console.log('the variable has been defined');
// } else {
//     console.log('the variable has NOT been defined');
// }

//Equality operator
//== operator does type coersion whereas === operator strictly checks and type coercion is not possible here 
// if(height === '23') {
// } else {
//     console.log('something else');
// }

//********************************************************** */
//CODING CHALLENGE 2
/*
    john and Mike both play basketball in different teams, in the latest 3 games, john's team scored 89, 120, 103 points while Mike's team scored 116, 94, 123 points.
    Calculate average score for  each team
    Decide which teams in average (highest average score) and print winner to consoleand include average score in the output and take draw into the account
    Extra: mary also plays the basketball with the points 97, 134, 105 points
 */
// var johnGame1 = 89;
// var johnGame2 = 120;
// var johnGame3 = 103;
// var johnAverage = (johnGame1 + johnGame2 + johnGame3) / 3;
// var mikeGame1 = 116;
// var mikeGame2 = 94;
// var mikeGame3 = 123;
// var mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
// var maryGame1 = 97;
// var maryGame2 = 134;
// var maryGame3 = 105;
// var maryAverage = (maryGame1 + maryGame2 + maryGame3) / 3;
// if(johnAverage > mikeAverage && johnAverage > maryAverage) {
//     console.log('John is the winner' + ' with an average of ' + johnAverage);
// } else if(mikeAverage > johnAverage && mikeAverage > maryAverage) {
//     console.log('mike is the winner' + ' with an average of ' + mikeAverage);
// } else {
//     console.log('Mary is winner with an average of ' + maryAverage);
// }

//FUNCTIONS
//Function Declaration
// function whatDoYouDo(job, firstName) { 
//     return (firstName +' '+  job);
// }
// console.log(whatDoYouDo('teacher', 'Adarsha'));

//Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives cars to the hell';
        case 'developer':
            return firstName + ' writes the code';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('developer', 'adarsha'));


