const express = require('express');
const mongoose = require('./config/db');
const {ObjectId} = require('mongodb');
//const _ = require('lodash');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Employee = require('./models/employee');
const EmployeeRouter = require('./routes/employee');

const port = 3000;

app.use((req, res ,next) => {
    console.log(`${req.method} | ${req.url} | ${req.ip} | ${new Date}`);
    next();
});

app.get('/', (req, res) => {
    res.send({
        notice:"you are under the surviellance now"
    });
});

//mongo
app.use('/employees',EmployeeRouter)

app.listen(port, () => {
    console.log("listening to the port", port);
});