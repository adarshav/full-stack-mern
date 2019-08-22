const fs = require('fs');

// var book = {
//     title:'Aavarana', 
//     author:'S L Bhairappa'
// }

// var bookJSON = JSON.stringify(book);//stringify just converts the json data into string and in the output it will be in double quotes
// console.log(bookJSON);
// var parsedData = JSON.parse(bookJSON);//it parses the json data from the normal string form
// //if we want to access the data in json like title and author we have to do it in json format only and not in string format like below
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json'); //it helps to read the data
// // console.log(dataBuffer);//and now we hav got the data in decimal format
// const dataJSON = dataBuffer.toString();//data is stringified
// const data = JSON.parse(dataJSON);//again converted to json format
// console.log(data.title)// hence we have accessed

console.log('******************************************');

//challenge data in 1-json.json
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name);
// data.name = 'deeksha';
// data.job = 'Software Engineer'

// const userJSON = JSON.stringify(data);
// fs.writeFileSync('1-json.json', userJSON);

//Practice
const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataJSON);
console.log(data);
console.log(data.name + ' has a skill set such as ' + data.skills);
data.skills.push('Express');
const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);