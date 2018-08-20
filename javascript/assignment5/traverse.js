/*Write a function that  

1. In the question 'Which one is correct team name in NBA?', return the index at which the correct answer is found 
*/
var questions = {
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}
/*TEST Case 

1. answerIndex("Which one is correct team name in NBA?","Huston Rocket" );
returns 3
*/
function answerIndex(question, answer) {
//console.log(questions.quiz.sport.q1.question); 
//console.log(questions.quiz.sport.q1.answer);
//console.log(questions.quiz.sport.q1.options.indexOf(questions.quiz.sport.q1.answer));
console.log(Object.keys(questions.quiz));
var sportResult = questions.quiz.sport.q1.question;
console.log(sportResult);
var mathResult = questions.quiz.maths.q1.question;
console.log(mathResult);
console.log('!!!!!!!!!!!!');
//console.log(questions.quiz.sport.q1.options);
console.log(questions.quiz.maths.q1.options);
var mathResult2 = questions.quiz.maths.q2.question;
console.log(mathResult2);
console.log('-----------------------------------');
    if(question === sportResult) {
        return questions.quiz.sport.q1.options.indexOf(questions.quiz.sport.q1.answer);
    }
   else if(question === mathResult) {
        return questions.quiz.maths.q1.options.indexOf(questions.quiz.maths.q1.answer);
    }
   else if(question === mathResult2) {
            return questions.quiz.maths.q2.options.indexOf(questions.quiz.maths.q2.answer);
    }
}
console.log(answerIndex("Which one is correct team name in NBA?","Huston Rocket"));
console.log(answerIndex("5 + 7 = ?","12"));
console.log(answerIndex("12 - 8 = ?","4"));
