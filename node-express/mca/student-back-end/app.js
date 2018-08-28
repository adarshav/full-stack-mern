const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./config/db');
const StudentRouter = require('./routes/student');
const app = express();


const Student = require('./models/student');

const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} | ${req.ip} | ${req.url} | ${new Date}`);
    next();
});

app.get('/', (req, res) => {
    res.send({
        notice:"Now you are in the ship"
    })
})

//mongo CRUD code lies here 
app.use('/student', StudentRouter);


app.listen(port, () => {
    console.log("listening to the port", port);
})