//Learning the Asynchronous block of Nodejs
// console.log("Starting");

// //it will execute after 3 minutes delay
// setTimeout(() => {
//     console.log("Asynchronous");
// }, 3000)

// console.log("stopping")
//For Asynchronous behaviour of Nodejs refer F:\Tutorials\HOLIDAYS\[FreeCourseLab.com] Udemy - The Complete Node.js Developer Course (3rd Edition)\6. Asynchronous Node.js (Weather App)

//Making HTTP requests using request npm package [npm init -y]
//npm install request
const request = require('request');
//weather api we have used is darksky api [darksky.net/dev] use ur email to login and the secret key is here
//url is divided into various parts key, lattitude, longitude and others are mentioned in documentation and it can be defined by ?key=value&otherKey=otherValue
const url = 'https://api.darksky.net/forecast/700b21162914f2b232bb8620fdc1ae08/37.8267,-122.4233?units=si';
//json property is used to parse the required data in json
// request({url: url, json:true}, (error, response)  => {
//     console.log(response.body.currently);
// })
//challenge
request({url: url, json:true}, (error, response) => {
    let temperature = response.body.currently.temperature;
    let percipitate = response.body.currently.precipProbability;
    console.log(` ${response.body.daily.data[0].summary} it is currently ${temperature} out and there are ${percipitate}% chances of rain`);
})
