const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const _ = require('lodash');
const ticketsRouter = require('./routes/tickets');


const mongoose = require('./config/db');
const {Ticket} = require('./models/ticket');

const app = express();//function
const port = 3000;

app.use(bodyParser.json());


//middlerware
app.use((req ,res, next) => {
    console.log(`${req.method} - ${req.url} - ${req.ip} ${new Date()}`);
    next();
});

//Route handler
//app.method(path, handler);
app.get('/', (req ,res) => {
    res.send({
        "notice":'welcome to the site'
    });
});

app.get('/products/:id', (req, res) => {
    res.send({
        "notice":`you asked for product with ${req.params.id}`
    });
});

app.get('/users/:userId/orders/:orderId', (req, res) => {
    res.send({
        "notice":`users with id ${req.params.userId} and ${req.params.orderId}`
    });
});
app.get('/about', (req, res) => {
    res.send({
        "notice":'about us page'
    });
});
//these mongo codes will be in routes folder
app.use('/tickets', ticketsRouter);

app.listen(port, () => {
    console.log("listening to the port", port);
});