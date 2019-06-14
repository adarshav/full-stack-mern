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
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives cars to the hell';
//         case 'developer':
//             return firstName + ' writes the code';
//         default:
//             return firstName + ' does something else';
//     }
// }
// console.log(whatDoYouDo('developer', 'adarsha'));

//*********************************** */
//Arrays
//Arrays are basically zero sized and it can hold all types of variables or types
// var family = ['Ganesha', 'Shantha', 'Raksha', 'Adarsha', 'Deeksha'];
// var years = new Array(1990, 1991, 1996, 2000, 1996);
// console.log(family[0]);
// console.log(years);
// //Array values can be mutated[changed] 
// // family[0] = "V. Ganesh Navada";
// console.log('------------');
// //console.log(family);
// family[family.length] = 'Shakti';
// // console.log(family);
// family.pop(); // removes the last element
// family.push('Shakti');//inserts the element at the last position
// console.log('the members of happy family are ' + family);
// family.unshift('Mr.');//it adds the element at the first or starting position
// console.log(family)
// //the other two methods to remove the elements are pop(): removes the last element, shift():removes the element from the starting position
// console.log(family.indexOf('Deeksha'));//it returns the position of the element if that particular element is present in the array, if the element is not present in the array it retruns -1
// var position = family.indexOf('Adarsha');
// console.log(typeof(position));//the return typeof indeOf() method is number
// var isMarried = family.indexOf('Deeksha') === -1 ? 'Adarsha is NOT Married':'Adarsha is Married';
// console.log(isMarried);

//******************************************************************* */


//CODING CHALLENGE

/*
    john and his family went on a holiday and went to 3 different restaurants and bills were $124, $48, $268.

    To tip the fair amount to waiter, john created simple tip calculater (function) , he likes to tip 20% of the bill if the bill is less than $50,
    15% if the bill is between $50 and $200, 10% if the bill is more than $200.

    In the end john would like to have 2 arrays
    1.Containing all three tips
    2.Containing all three finally paid total bills (tip + bill)
 */

//  function tipCalculator(bill) {
//      var percentage;
//      if(bill < 50) {
//          percentage = 0.2;
//      } else if(bill >= 50 && bill < 200) {
//          percentage = 0.15;
//      } else {
//          percentage = 0.1;
//      }
//      return percentage * bill;
//  }
//  var bills = [124, 48, 268]; 
//  var tips = [Math.floor(tipCalculator(bills[0])), Math.floor(tipCalculator(bills[1])), Math.floor(tipCalculator(bills[2]))];

//  var totalBill = [bills[0] + tips[0], 
//                     bills[1] + tips[1],
//                 bills[2] + tips[2]];
//  console.log(tips, totalBill);
//  console.log(tipCalculator(100));

//******************* */
//OBJECTS
// var adarsha = {
//     firstName:'Adarsha',
//     lastName:'V',
//     skills:['javascript', 'nodejs', 'reactjs', 'react-native'],
//     job:'full-stack-web developer'
// }
// console.log(adarsha);
// console.log(adarsha.job);
// console.log('---------------------------');
// console.log(adarsha['skills']);//when we are accesing properties in objects like the above we have to mention it in Single inverted commas

//the properties in object are aloso subject to mutable
// adarsha.job = 'senior web-developer';
// adarsha['isMarried'] = 'false';
// console.log(adarsha);

//new object syntax
// var adarsha = new Object();
// adarsha.firstName = 'Adarsha';
// adarsha.lastName = 'V';
// adarsha['skills'] = ['javascript', 'nodejs', 'reactjs', 'react-native'];
// adarsha.isMarried = false;
// console.log(adarsha);

// var adarsha = {
//     firstName:'Adarsha',
//     birthYear:1996,
//     skills:['javascript', 'nodejs', 'reactjs', 'express'],
//     isMarried:false,
//     calcAge:function(birthYear) {
//         return 2019 - birthYear
//     },//this is function expression and it is a method
//     calculateAge:function() {
//         return 2019 - this.birthYear;
//     }//this is an illustration of THIS, instead of writing another parameter just use THIS and THIS refers to the current object 
// };

// // console.log(adarsha.calcAge(1996));
// console.log(adarsha.calculateAge());

// var adarsha = {
//     firstName:'Adarsha',
//     birthYear:1996,
//     skills:['javascript', 'nodejs', 'reactjs', 'express'],
//     isMarried:false,
//     calcAge:function() {
//         this.age = 2019 - this.birthYear
//     }//if i want to save it in the same object i can do like this
// }
// adarsha.calcAge();
// console.log(adarsha);
//what is method?
//properties with function is known as method

//********************************************************** */
//CODING CHALLENGE

/* 
    for both john and mark create objects with properties fullName, mass and height and then add a method toeach object to calculate BMI and save BMI and return from the method
    In the end console who has the highest BMI, together with the fullName and respective BMI's dont forget they may have the same BMI
    BMI = mass / (height * height);
*/
// var john = {
//     fullName:'John',
//     mass:40,
//     height:1.95,
//     calculateBMI:function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }
// var mark = {
//     fullName:'Mark',
//     mass:27,
//     height:1.67,
//     calculateBMI:function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }

// if(john.calculateBMI() > mark.calculateBMI()) {
//     console.log(john['fullName'] + ' BMI is higher than ' + mark['fullName'] + 'with Body Mass Index ' + john['BMI']);
//  } else if(mark.BMI > john.BMI) {
//     console.log(mark.fullName + 'BMI is higher than ' + john.fullName + 'with Body Mass Index is' + mark.BMI);
//  } else {
//     console.log('both john and mark body mass index is same');

//  }

//********************************************************* */

//LOOPS AND ITERATIONS

// var skills = ['javascript', 'nodejs', 'mongodb', 'express', 'react', 'react-native'];
// // for(var i = 0; i < skills.length; i++) {
// //     console.log(skills[i]);
// // }
// //backward looping
// for(var i = skills.length-1;i >= 0; i--) {
//     console.log(skills[i]);
// }

//CODING CHALLENGE

/*
    Adavnced version of the tip calculator
    this time john and his family went to 5 different restaurants, the bills were 124, 48, 268, 180 and 42.
    john likes to tip 20% of the bill if the bill is less than $50, 15% if the bill is between $50 and $200 and 10 % of the bill if it is more than $200.

    Implement a tip calculator using objects and loops
    1. Create an object with array for the bill values
    2. Add a method to calculate the tip
    3. this method should include a loop to iterate over all the paid bills and do the tip calculations
    4. As an ouptput create 1) A new  array containging all tips and 2)An array containing all final paid amount (bill + tip), HINT: start with 2 empty arrays as properties and fill up them in the loop
 */

var john = {
    fullName:'John Raj',
    bills:[124, 48, 268, 180, 42],
    calculateTip:function() {
        // var percentage;
        this.tips = new Array();
        this.total = new Array();
        for(var i = 0;i < this.bills.length;i++) {
            // for(var j = 0;j <= this.tips.length;j++) {
                if(this.bills[i] < 50) {
                    this.tips.push(Math.floor(0.2 * this.bills[i]));
                    // this.total.push(this.tips[j] + this.bills[i]);
                } else if(this.bills[i] >= 50 && this.bills[i] < 200) {
                    this.tips.push(Math.floor(0.15 * this.bills[i]));
                    // this.total.push(this.tips[j] + this.bills[i]);
                } else {
                    this.tips.push(0.1 * this.bills[i]);
                    // this.total.push(this.tips[j] + this.bills[i]);
                }
            // }
            this.total[i] = this.tips[i] + this.bills[i];
        // return this.tips;
    }
}
}
john.calculateTip();
console.log(john);

//CODING CHALLEENGE-PART-B
/*
    Above functionalities is same but now its for mark and 4 different restaurant bills are 77, 375, 110 and 45.
    mark likes to tip 20% of the bill if the bill is less than 100, 10% when the bill is between 100 and 300 and 25% if the bill is more than 300 (different from john).
    Create a function (not method) to calculate the average of given array of tips HINT:loop over the array items and in each iteratio store the store the current sum in a variable (starting from 0), After you have the sum of the array divide it by number of elements in it
    Calculate the average tip for each of the family 
    log onto the console which family paid the highest tips on average
 */
var mark = {
    fullName:'Mark Twain',
    bills:[77, 375, 110, 45],
    calculateTip:function() {
        this.tips = new Array();
        for(var i = 0;i < this.bills.length;i++) {
            if(this.bills[i] < 100) {
                this.tips.push(0.2 * this.bills[i]);
            } else if(this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tips.push(0.1 * this.bills[i]);
            } else {
                this.tips.push(0.25 * this.bills[i]);
            }
        }
    }
}
mark.calculateTip();
console.log(mark);

function averageTip() {
    var sum = 0, average;
    for(var i = 0;i < mark.tips.length;i++) {
        // console.log(mark.tips[i]);
        sum = sum + mark.tips[i];
    }
    average = sum / mark.tips.length;
    return average ;
}
console.log(averageTip());

//HOW JAVASCRIPT WORKS AND HOW OUR CODE GETS EXECUTED

/*
    There will be an javascript engine in every modern browser For Ex: Google Chrome has V8 engine for javascript.
    This javascript engine will be having 
    1) PARSER which checks for syntax errors in the code if there is an syntax error it raise the objection or in other words throws an error,if it passes every bar.
    2) There will be a data structure called Abstract Syntax Tree which converts the natural language code into machine Code for the understanding of computer, which can be directly  executed by the computer's processor AND the code runs...
 */