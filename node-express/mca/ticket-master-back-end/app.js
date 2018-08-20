const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const mongoose = require('./config/db');
const { Ticket } = require('./models/ticket');

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

//mongo
//list all tickets
app.get('/tickets', (req, res) => {
    Ticket.find().then((tickets) => {
        res.send(tickets);
    }).catch((err) => {
        res.send(err);
    })
});

//create
app.post('/tickets', (req, res) => {
    let body = req.body;
    let ticket = new Ticket(body);
    ticket.save().then((ticket) => {
        res.send(ticket);
    })
    .catch((err) => {
        res.send(err);
    })
});

//findOne
app.get('/tickets/:id', (req, res) => {
    let id = req.params.id;
    //using mongodb package to handle the different id's
    if(!ObjectId.isValid(id)) {
        res.send({
            "notice":"invalid object id"
        });
    }

    Ticket.findById(id).then((ticket) => {
        if(ticket) {
            res.send(ticket);
        } else{
            res.status(404).send({
                "notice":'ticket not found'
            });
        }
        
    }).catch((err) => {
        res.send(err);
    })
});

//update
app.put('/tickets/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    if(!ObjectId.isValid(id)) {
        res.send({
            "notice":"invalid id"
        });
        return false;
    }

    Ticket.findByIdAndUpdate(id, { $set:body}, {new:true})
    .then((ticket) => {
        res.send({
            ticket, 
            "notice":"successfully updated the ticket"
        });
    }).catch((err) => {
        res.send(err);
    })

});
//delete
app.delete('/tickets/:id', (req, res) => {
    let id = req.params.id;
    //this is also from mongodb package 
    if(!ObjectId.isValid(id)) {
        res.send({
            "notice":"invalid object id"
        });
        return false;//we cannot send multiple res.send so this is used
    }

    Ticket.findByIdAndRemove(id).then((ticket) => {
        if(ticket) {
            res.send({
                ticket,
                "notice":'successfully removed the record'
            });
        } else {
            res.status(404).send({
                "notice":"ticket not found"
            })
        }
        
    }).catch((err) => {
        res.send(err);
    })
});

app.listen(port, () => {
    console.log("listening to the port", port);
});