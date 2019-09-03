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
// const url = 'https://api.darksky.net/forecast/700b21162914f2b232bb8620fdc1ae08/37.8267,-122.4233?units=si';
//json property is used to parse the required data in json

// request({url: url, json:true}, (error, response)  => {
//     if(error) {
//         console.log("error has appeared"); 
//     } else if(response.body.error) {
//         console.log("unable to find the location");
//     } else {
//         console.log(response.body.currently);
//     }
// })
//challenge
// request({url: url, json:true}, (error, response) => {
//     let temperature = response.body.currently.temperature;
//     let percipitate = response.body.currently.precipProbability;
//     console.log(` ${response.body.daily.data[0].summary} it is currently ${temperature} out and there are ${percipitate}% chances of rain`);
// })

//geocoding
const geoCode = require('./utils/geocode');
const foreCast = require('./utils/forecast');
const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bengaluru.json?access_token=pk.eyJ1IjoiYWRhcnNoYXYiLCJhIjoiY2p6dHlleGphMDlxMjNvcWl2YWJ3dWZ0YyJ9.DNx_0PCh0NtGNQfRTj5K1A';

request({url: geoCodeUrl, json:true}, (error, response) => {
    if(error) {
        console.log("check ur internet connection")
    }else if(response.body.features.length === 0) {
        console.log("unable to find ");
    } else {
        let longitude = response.body.features[0].center[0];
        let lattitude = response.body.features[0].center[1];
        console.log(`longitudde is ${longitude} lattitude is ${lattitude}`)
    }
    
})

geoCode('Udupi', (error, data) => {
    // console.log('Error', error)
    console.log('Data', data)
})

foreCast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})