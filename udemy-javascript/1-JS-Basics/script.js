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
var name = 'adarsha';
var civilStatus = 'single';
if(civilStatus === 'married') {
    console.log(name + ' ' + 'is married');
} else { 
    console.log(name + ' ' + 'will hopefully marry soon');
}