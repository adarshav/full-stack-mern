const express = require('express');
const shortHash = require('short-hash');
const _= require('lodash');
const bodyParser = require('body-parser');

const mongoose = require('./config/db');
const Shorturl = require('./models/url');
const urlRouter = require('./routes/url');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} | ${req.ip} | ${req.url} | ${new Date}`);
    next();
});

app.get('/',(req, res) => {
    res.send({
        "notice":"you are in the right plane now"
    });
});
//mongo
app.use('/urls', urlRouter);

app.listen(port,() => {
    console.log("listening to the port", port);
});